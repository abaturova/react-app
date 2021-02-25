import React, {Component} from 'react'
import {ProductsData} from '../constans/products'
import {IconButton, Link} from "@material-ui/core"
import {Link as RouterLink} from "react-router-dom"
import EditIcon from '@material-ui/icons/Edit'

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
                        <td><Link component={RouterLink} key={prod.id} to={{ pathname: `/products/${prod.id}`}}>
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

export default ProdList