import React from "react";
import "./style.css"

function Header(props) {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <p className="navbar-brand" >Stranger Clicks</p>
                <p className="nav-item col text-right">Score: {props.score}</p>
                <p className="nav-item">{props.message}</p>
            </nav>
        </div>
    )
}

export default Header;