import React, {useEffect, useState} from "react";
import {Button, ButtonGroup, Table} from "react-bootstrap";
import {Link} from "react-router-dom";

function ClientList(props) {


    return(
        <>
            <Table className="mt-4">
                <thead>
                <tr>
                    <th width="30%">Name</th>
                    <th width="30%">Email</th>
                    <th width="40%">Actions</th>
                </tr>
                </thead>
                <tbody>
            {

                props.clients.map(client => {
                    return <>

                    <tr key={client.id}>
                        <td style={{whiteSpace: 'nowrap'}}>{client.name}</td>
                        <td>{client.email}</td>
                        <td>
                            <ButtonGroup>
                                <Link to={`/clients/${client.id}`}>
                                    <Button  size="md" variant="primary" >Edit</Button>
                                </Link>
                                <Button size="md" variant="danger" onClick={() => props.onRemove(client.id)}>Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>

                    </>
                })
            }
                </tbody>
            </Table>
        </>
    )
}

export default ClientList