import React, { useState } from 'react'
import Alert from '../components/Alert'

function AddAuthor() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [designation, setDesignation] = useState("")
    const [about, setAbout] = useState("")

    const [alert, setAlert] = useState(null)

    const showAlert = (message)=>{
        setAlert({
          msg:message,
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000);
    }
     
    
    function saveAuthor(){
        let data = {name, email, phone, about};

        fetch("https://nameless-peak-43027.herokuapp.com/add-author", {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((result)=>{
            console.log(result, "Result");
            setName("");
            setEmail("");
            setAbout("")
            setPhone("")
            setDesignation("")
            showAlert("Author has been added")
        })     
    }

  return (
    <div id='layoutSidenav_content'>
        <Alert alert={alert} />
        <h1>Add author below</h1>

        <label htmlFor="authorName">Name:</label>
        <input type="text" name="name" value={name} id="authorName" onChange={(e)=> setName(e.target.value)} />
        <br />

        <label htmlFor="authorEmail">Email:</label>
        <input type="email" name="email" value={email} id="authorEmail" onChange={(e)=> setEmail(e.target.value)} />
        <br />

        <label htmlFor="authorPhone">Phone:</label>
        <input type="number" name="phone" value={phone} id="authorPhone" onChange = {(e)=> setPhone(e.target.value)} />
        <br />

        <label htmlFor="authorDesignation">Designation:</label>
        <input type="text" name="" id="authorDesignation" value={designation} onChange= {(e)=> setDesignation(e.target.value)} />
        <br />

        <label htmlFor="authorAbout">About:</label>
        <input type="text" name="about" id="authorAbout" value={about} onChange={(e)=> setAbout(e.target.value)} />
        <br />

        <button type='button' onClick={saveAuthor}>Add Author</button>

    </div>
  )
}

export default AddAuthor