import React from "react";

function Sidebar () {

    return (
  
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <a className="nav-link" href="/dashboard">
                            <div className="sb-nav-link-icon"><i className="fa fa-tachometer"></i></div>
                            Dashboard
                        </a>


                        <a className="nav-link" href="/authors">
                            <div className="sb-nav-link-icon"><i className="fa fa-graduation-cap"></i></div>
                            People
                        </a>

                        <a className="nav-link" href="/add-author">
                            <div className="sb-nav-link-icon"><i className="fa fa-graduation-cap"></i></div>
                            Add-People
                        </a>
                    </div>
                </div>
            </nav>
     
 
    )
}
export default Sidebar;