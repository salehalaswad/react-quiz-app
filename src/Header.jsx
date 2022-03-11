import React from "react";
import { Link } from "react-router-dom";

const Header = ({ title }) => {

   
    return (
        <header className="App-header">
            <h3>{title}</h3>
            <Link to="/api" >API</Link >
        </header>
    )
}
export default Header;