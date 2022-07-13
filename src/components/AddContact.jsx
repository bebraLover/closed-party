import React, {useState} from 'react';

const AddContact = () => {

    const [name,setName] = useState("")
    const [surname,setSurname] = useState("")
    const [email,setEmail] = useState("")

    const submitContact = async (event) => {
        event.preventDefault();
        let contact = {
            name: name,
            surname: surname,
            email:email
        }
        let response = await fetch("http://localhost:8080/api/contacts",
            {
                method:"POST",
                headers:{
                    "content-type":"application/json",
                },
                body: JSON.stringify(contact)
            })
        response = response.json()
        window.location.reload()
    }

    return (
        <div className="row">
            <form className="col s12" onSubmit={submitContact}>
                <div className="row">
                    <div className="input-field col s6">
                        <input placeholder="Placeholder" id="name" type="text" className="validate"   onChange={event => setName(event.target.value)}/>
                            <label htmlFor="name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                        <input id="surname" type="text" className="validate" onChange={event => setSurname(event.target.value)}/>
                            <label htmlFor="surname">Last Name</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="email" type="email" className="validate" onChange={event => setEmail(event.target.value)}/>
                            <label htmlFor="email">Email</label>
                    </div>
                </div>
                <div className={"row"}>
                    <button className={"waves-effect waves-light btn"} type={"submit"} name={"action"}>Submit</button>
                </div>
            </form>
        </div>
);
};

export default AddContact;
