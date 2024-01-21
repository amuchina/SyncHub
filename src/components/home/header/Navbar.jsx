import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import notification from "bootstrap-icons/icons/bell-fill.svg";
import "../../../Style.css";
import logo from '../../logo.png';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <img src={logo} id="logo"></img>
        <a className="navbar-brand" id="navname" href="index.html">
          <strong>SyncHub</strong>
          <p> \ Where ideas synchronize</p>
        </a>
        <form className="form-inline mx-auto" method="POST" action="search.php">
                <input
                className="form-control mr-sm-2"
                id="searchbar"
                type="search"
                name="search"
                placeholder="Cerca in SyncHub🔎"
                aria-label="Cerca in SyncHub🔎"
            ></input>
            <button
                className="btn btn-outline-danger my-2 my-sm-0"
                id="searchbutton"
                type="submit"
            >
                Cerca
            </button>    
        </form>
        <div className="dropdown" id="notificationcenter">
          <button
            id="notification"
            className="dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={notification}></img>
          </button>
          <ul className="dropdown-menu">
            <li>
              <strong>Le tue notifiche</strong>
            </li>
          </ul>
        </div>
        <Link to="/signup">
          <button id="signup" type="button" className="btn btn-danger">
            Registrati
          </button>  
        </Link>
        <Link to="/login">
          <button id="login" type="button" className="btn btn-danger">
            Accedi
          </button>  
        </Link>
        
      </nav>
    </>
  );
}

export default Navbar;
