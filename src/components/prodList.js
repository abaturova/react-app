import React, {Component} from 'react'

class Product extends Component {
    state = [
        {id:1, name: 'Parachute Pants', price: 29.99 }
    ]
}

class ProdList extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.name}</td>
                <td>{this.props.price}</td>
            </tr>
        )
    }


}

export default ProdList