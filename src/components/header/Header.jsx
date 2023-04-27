import React from "react";
import "./Header.css";

const Header =({title})=>{
    return(
        <>
        <header><div className="header">{title}</div></header>
        </>
    )
}

export default Header;