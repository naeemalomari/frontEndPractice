import React, { Component } from 'react'
import axios from 'axios';
import ApiData from './ApiData'
import ApiCrudData from './ApiCrudData';
import CrudUpdateForm from './CrudUpdateForm';
class Favorite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: process.env.REACT_APP_SERVER_URL,
            apiCrudData: [],
            showCrudDataComponent: false,
            showAPIMessage: false,
            message: '',
            description: '',
            slugName: '',
            showUpdateForm: false,
        }
    }
    componentDidMount = async () => {

        const request = await axios.get(`http://localhost:8080/art/favorite`)
        this.setState({
            apiCrudData: request.data,
            showCrudDataComponent: true,
        })
    }
    deleteItem = async (slug) => {
        await axios.delete(`http://localhost:8080/art/favorite/${slug}`)
        const newCrudData = this.state.apiCrudData.filter(obj => obj.slug !== slug)
        this.setState({
            apiCrudData: newCrudData,
        })
    }
    showUpdateForm = (description, slug) => {
        this.setState({
            
            description: description,
            slugName: slug,
            showUpdateForm: true,
        })
    }
    updateDescriptionState=(e) => {
        this.setState({
            description: e.target.value,
        })
    }
    updateItem = async (e,x) => {
        e.preventDefault();
        console.log(e.target.input.value);
        console.log(x);
        const y ={description:e.target.input.value}
        const updateRequest =await axios.put(`http://localhost:8080/art/favorite/${x}`,y)
        console.log(updateRequest.data);
    }
    render() {
        return (
            <>
                {this.state.showDataComponent &&
                    <ApiData
                        apiData={this.state.apiData}
                        FavoriteItem={this.FavoriteItem}
                    />
                }
                {this.state.showUpdateForm &&
                    <CrudUpdateForm
                        updateItem={this.updateItem}
                        updateDescriptionState={this.updateDescriptionState}
                        description={this.state.description}
                        slugName={this.state.slugName}
                    />
                }
                {this.state.showCrudDataComponent &&
                    <ApiCrudData
                        apiCrudData={this.state.apiCrudData}
                        deleteItem={this.deleteItem}
                        showUpdateForm={this.showUpdateForm}

                    />
                }

            </>
        )
    }
}
export default Favorite;