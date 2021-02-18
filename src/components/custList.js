import React, {Component} from 'react'
import {UsersData} from "../constans/users"

class CustList extends Component {
    render() {
        return (
            <>
                {UsersData.map((prod ,ind) => {
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

