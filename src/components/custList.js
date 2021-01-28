import React, {Component} from 'react'

class CustList extends Component {
    constructor(props) {
        super(props)
        this.state = [
            {id:1, name: 'Mark Benson', address: '353 Rochester St, Rialto FL', tel: '555-534-2342' }
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
                            <td>{prod.address}</td>
                            <td>{prod.tel}</td>
                        </tr>
                    )
                })}
            </>
        )
    }
}

export default CustList

