import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'



class ApiData extends Component {
    render() {
        return (

            this.props.apiData.map((obj, idx) => {
                return (
                    <div key={idx}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Title>{obj.title}</Card.Title>
                            <Card.Img variant="top" src={obj.thumbnail} />
                            <Card.Text>{obj.artist_name}</Card.Text>
                            <Card.Text>{obj.description}</Card.Text>
                            <Button variant="success" onClick={e => this.props.FavoriteItem(obj)}>ADDING ME TO THE FAVORITE </Button>

                        </Card>
                    </div>
                )
            })
        )
    }
}

export default ApiData
