import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';





function Login() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let history = useNavigate();

  async function handleClick()
  {
    console.warn(email, password, "Data");
    let item = {email, password };
    let result = await fetch("https://nameless-peak-43027.herokuapp.com/login", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json", 
         
      },
      body: JSON.stringify(item) 
    });

    result = await result.json();
    localStorage.setItem('dashboard', JSON.stringify(result));
    let localVal = localStorage.getItem("dashboard");
    let stausData = JSON.parse(localVal);
    
    if(stausData.status === 200){
      history("/dashboard");      
    }
    else{
      alert("Please fill the data")
    }
     
  }


  
  return (
    <>
    <div className="adminLogin">
            <div className="formBox">
              <label htmlFor="uname">User Name</label>
              <input type="text" id="uname" placeholder='User Name...' onChange={(e) => setEmail(e.target.value)} /> 
              <label htmlFor="upass">Password</label>
              <input type="password" id="upass" placeholder='Password...' onChange={(e)=> setPassword(e.target.value)} />   
              <button type="submit" onClick={handleClick}>Login</button>
            </div>

    </div>

    </>
  )
}

export default Login