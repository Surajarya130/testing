import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Nav } from "reactstrap";
import { useNavigate } from "react-router-dom";


function Header () {
    let navigate = useNavigate();
    const [dropdownOpen , setDropdownOpen] = useState(false)

    const toggle = () => {
      setDropdownOpen(!dropdownOpen)
      }
      const toggleSidebar = () => {
        document.body.classList.toggle('showSidebar');
      }

    function logout() {
        localStorage.clear();
        navigate("/");
        console.log("first")
    }
return(
    <Nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a className="navbar-brand ps-3" href="/">RedChillied Test</a>
        <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 sidebarToggle" id="sidebarToggle"  onClick={() =>{
              toggleSidebar()
            }}><i
            className="fa fa-bars"></i></button>
            <div className="ms-auto me-3 me-lg-4 header__user">
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle>
          Suraj <i className="fa fa-user fa-fw"></i>
        </DropdownToggle>
        <DropdownMenu className="user__menu">
          <DropdownItem ><i className="fa fa-sign-out-alt"></i><div onClick={() => logout()} style={{paddingLeft: 10}}>Logout</div></DropdownItem>
  
        </DropdownMenu>
      </Dropdown>
      </div>
        </Nav>
)
}
export default Header