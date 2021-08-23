import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'


export class ApiCrudData extends Component {
    render() {
        return (
            this.props.apiCrudData.map((obj, idx) => {
                return (
                    <div key={idx}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Title>{obj.title}</Card.Title>
                            <Card.Img variant="top" src={obj.thumbnail} />
                            <Card.Body>
                                <Card.Text>{obj.artist_name}</Card.Text>
                                <Card.Text>{obj.description}</Card.Text>
                                <Button onClick={e => this.props.deleteItem(obj.slug)} variant="success"> DELETE ME FROM THE FAVORITE LIST </Button>
                                <Button onClick={e => this.props.showUpdateForm(obj.description, obj.slug)} variant="success"> UPDATE THE DESCRIPTION </Button>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })
        )
    }
}
export default ApiCrudData;
