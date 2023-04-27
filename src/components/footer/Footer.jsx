import React from "react";
import "./Footer.css";


const Footer =({text,})=>{
    return(
        <>
        <footer>
            <div className="footer">{text}
            <span className="badge text-bg-warning">
                Realizado por Pedro Gutes
                </span>
                </div>
        </footer>
        </>
    )
}



export default Footer;