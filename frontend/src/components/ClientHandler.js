import React, {useEffect, useState} from "react";
import ClientList from "./ClientList";
import {Button, Container} from "react-bootstrap"
import {Link} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

function ClientHandler() {
    const [clients, setClients] = useState([])
    useEffect( () => {
        const fetchData = async () => {
            const result = await fetch(
                '/api/v1/clients',
            );
            const jsonData = await result.json()
            setClients(jsonData);
        };

        fetchData().catch(err => console.log(err));

    }, [])

    async function removeClient(id) {
        const result = await fetch(`/api/v1/clients/${id}`, {
            method: 'DELETE'})
        console.log(result)
        if (result.status == 200) {
            const _clients = clients.filter(clnt => clnt.id != id);
            toast("Deleted Successfully!")
            setClients(_clients)
        }
    }

    return(
        <>
            <Container fluid>
                <div className="float-right">
                    <Link to={"/clients/new"}>
                        <Button color="success">Add Client</Button>
                    </Link>

                </div>
                <h3>Clients</h3>
                {clients && <ClientList clients={clients} onRemove={removeClient}/>}
            </Container>
        </>)


}

export default ClientHandler