import React from "react";
import "./Admin.css";
import Nav from "../../components/LeftNavBar/nav";
import Card from '../../components/Card/NewCard';
export const Adminpage = (props) => {
    let phaseOneStudents = ["Jim", "Jill", "Ashely"];
    let phaseTwoStudents = ["Brad", "Chris", "Anthony"];
    let phaseThreeStudents = ["Hanah", "Travis"];
    let phaseFourStudents = ["Willma"]
    
    return (
        <>
            <Nav students={props.data}/>
            <div className="content">
                <div className="break">
                    <Card timePeriod="30 Days" students={phaseOneStudents} />
                    <Card timePeriod="60 Days" students={phaseTwoStudents} />   
                </div>
                <div className="break">
                    <Card timePeriod="90 Days" students={phaseThreeStudents} />
                    <Card timePeriod="4 Months" students={phaseFourStudents} />
                </div>

            </div>
        </>
    );
};