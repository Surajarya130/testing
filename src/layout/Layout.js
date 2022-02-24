import React from "react";
import Header from "../components/Header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Routes from "../routes/Routes";

function Layout() {
  return (
    <div>
      <Header />
      <div>
        <div className="dashboard__wrapper">
          <div className="">
            <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
              <Sidebar />
            </div>
              <Routes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
