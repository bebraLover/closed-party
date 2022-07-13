import React, {useEffect, useState} from 'react';
import Contact from "./Contact";
import {DataGrid} from "@mui/x-data-grid";
import AddContact from "./AddContact";

const Contacts = (props) => {
    const [contacts, setContacts] = useState([]);

    useEffect(()=> {
            async function fetchData(){
                const response = await fetch("http://localhost:8080/api/contacts")
                const result = await response.json()
                setContacts(result)
            }
            fetchData()
        },[]
    )
    return (
        <div>
            <h1>Contact List</h1>
            <AddContact/>
            <div>
                {contacts.map(contact =>(
                    <Contact key={contact.id} item={contact}/>
                ))}
            </div>
        </div>
    );
};

export default Contacts;
