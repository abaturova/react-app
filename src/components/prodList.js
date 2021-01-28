import React, {Component} from 'react'

class ProdList extends Component {
    constructor(props) {
        super(props)
        this.state = [
            {id:1, name: 'Parachute Pants', price: 29.99},
            {id:2, name: 'Phone Holder', price: 9.99}
            ]
    }
    render() {
        return (
            <>
                {this.state.map((prod ,ind) => {
                    return(
                        <tr key={ind}>
                        <td>{prod.id}</td>
                        <td>{prod.name}</td>
                        <td>{prod.price}</td>
                        </tr>
                    )
                })}
            </>
        )
    }
}

export default ProdList