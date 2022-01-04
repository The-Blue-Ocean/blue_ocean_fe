import React from "react";
import "./Admin.css";
import Nav from "../../components/LeftNavBar/nav";
export const Adminpage = (props) => {
    
    
    return (
        <>
            <Nav students={props.data}/>
            
        </>
    );
};