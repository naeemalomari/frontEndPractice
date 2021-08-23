import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
export class CrudUpdateForm extends Component {
    render() {
        return (
            <div>
                <form  onSubmit={e=> this.props.updateItem(e, this.props.slugName)}> 
                    <label > ADD YOUR NEW DESCRIPTION </label>
                    <input type="text" defaultValue={this.props.description} onChange={this.props.updateDescriptionState}  name="input"   />
                    <button type="submit" value="updateData " > Update description</button>
                </form>
            </div>
        )
    }
}

export default CrudUpdateForm;