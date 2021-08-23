import React from 'react';
import axios from 'axios';
import ApiData from './ApiData'


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: process.env.REACT_APP_SERVER_URL,
            apiData: [],
            showDataComponent: false,
        }
    }
    componentDidMount = async () => {
        const request = await axios.get(`http://localhost:8080/art`);
        this.setState({
            apiData: request.data,
            showDataComponent: true,
        })
    }
    FavoriteItem = async (dataObj) => {
        await axios
        .post(`http://localhost:8080/art/favorite` ,dataObj);
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
            </>
        )
    }
}
export default Main;