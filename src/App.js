import Layout from "./layout/Layout";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import Login from "./pages/Login";

import "./App.css";
import { useLocation } from "react-router-dom";

function App() {
  const p = useLocation();

  return (
    <>
    {p.pathname !== "/" ?
      
      <div className="App sb-nav-fixed">
        <Layout />
      </div>
      :
      <Login />
      
    }
    </>
  );
}

export default App;
