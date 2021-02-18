import React, {Component} from 'react'
import {ProductsData} from '../constans/products'

class ProdList extends Component {
    render() {
        return (
            <>
                {ProductsData.map((prod ,ind) => {
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