import React, {Component} from 'react'
import {UsersData} from "../constans/customers"
import {IconButton, Link} from "@material-ui/core"
import {Link as RouterLink} from "react-router-dom"
import EditIcon from '@material-ui/icons/Edit'

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
                            <td><Link component={RouterLink} key={prod.id} to={{ pathname: `/customers/${prod.id}`}}>
                                <IconButton aria-label="edit">
                                    <EditIcon />
                                </IconButton>
                            </Link> </td>
                        </tr>
                    )
                })}
            </>
        )
    }
}

export default CustList

