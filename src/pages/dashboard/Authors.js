import React, { useEffect, useState } from 'react'

function Authors() {

  const [authorData, setAuthorData] = useState()

  async function getUsers() {
    const response = await fetch('https://nameless-peak-43027.herokuapp.com/author', {
      method: 'GET',
      headers: {
        accept: 'application/json',
      },
    });

    const data = await response.json();
    setAuthorData(data)
  }

  useEffect(() => {
  
      getUsers();
    }, []);  
    
    if(authorData === undefined){
      return null;
    }


    function deleteAuthor(id){
      let data = {id};

      fetch("https://nameless-peak-43027.herokuapp.com/delete-author", {
          method:'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
      }).then((result)=>{
          alert("deleted")
          getUsers();
      })  
    }


  return (
    <>
    <div id='layoutSidenav_content'>
    <h1>People at RedChillies</h1>


    <div className="section">
  <div className="container">
    <div className="columns">


{
  authorData.data.map((eachAuthor, index) => {
    return(
      <div className="card">
      <div className="header">
              <i onClick={()=> deleteAuthor(eachAuthor.id) } className="fa fa-trash-o" style={{fontSize:"24px", color:"#fff", cursor:"pointer"}}  ></i>
        <div className="avatar">
          <img src="https://randomuser.me/api/portraits/women/67.jpg" alt="" />
        </div>
      </div>
      <div className="card-body">
        <div className="user-meta has-text-centered">

          <h3 className="username">{eachAuthor.name}</h3>
          <h4 className='phone'>{eachAuthor.designation} </h4>
          <h5 className="position">{eachAuthor.phone}</h5>
        </div>
        <div className="user-bio has-text-centered">
          <p>{eachAuthor.about}</p>
        </div>
        <div className="action has-text-centered">
          <a href="/dashboard" className="button is-small">View profile</a>
        </div>
      </div>
    </div>

    )
  })
}




    </div>
  </div>

</div>
    
    </div>
    </>
  )
}

export default Authors