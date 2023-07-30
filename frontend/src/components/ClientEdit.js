import React, {useEffect, useState} from "react";
import {Button, Form, FormControl, FormGroup, FormLabel} from "react-bootstrap";
import {Link, useParams, useHistory} from "react-router-dom";
import {toast} from "react-toastify";

function ClientEdit(props) {

    const {id}= useParams()
    const history = useHistory()
    const [client, setClient] = useState({name: '', email: ''})

    useEffect(() => {
        const fetchClient = async () => {
                const data = await fetch(`/api/v1/clients/${id}`);
                if(data.status > 399) toast(`Requested User was not found`)
                else {
                    const json = await data.json()
                    setClient(json)
                }
        }
        fetchClient()

    },[])

    function onChange(e) {setClient({...client, [e.target.name]: e.target.value}) };

    async function handleSubmit(event) {
        event.preventDefault();

        fetch('/api/v1/clients' + (client.id ? '/' + client.id : ''), {
            method: (client.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(client),
        }).then(res => {
            toast('Saved')
            history.push('/clients/')
        });
    }

    return(
        <>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel for="name">Name</FormLabel>
                    <FormControl type="text" name="name" id="name" value={client.name || ''}
                           onChange={onChange} autoComplete="name"/>
                </FormGroup>
                <FormGroup>
                    <FormLabel for="email">Email</FormLabel>
                    <FormControl type="text" name="email" id="email" value={client.email || ''}
                           onChange={onChange} autoComplete="email"/>
                </FormGroup>
                <FormGroup>
                    <Button color="primary" type="submit">Save</Button>{' '}
                    <Link to={"/clients"}>
                        <Button  size="md" variant="secondary" >Cancel</Button>
                    </Link>
                </FormGroup>
            </Form>
            </>

        )
}

export default ClientEdit