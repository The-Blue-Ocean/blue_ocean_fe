import React from "react";
import "./Admin.css";
import Nav from "../../components/LeftNavBar/nav";
import Card from "../../components/Card/NewCard";
export const Adminpage = (props) => {
  let testStudents = props.ids;
  
  let phaseTwoStudents = ["Brad", "Chris", "Anthony"];
  let phaseThreeStudents = ["Hanah", "Travis"];
  let phaseFourStudents = ["Willma"];
  let names = testStudents.map((element,index) => {
    return  element['name']
})
let dates = testStudents.map((element,index) => {
    return  element['ets']
})

  return (
    <>
      <Nav students={props.ids} />
      <div className="content">
        <div className="break">
          <Card timePeriod="30 Days" students={names} />
          <Card timePeriod="60 Days" students={phaseTwoStudents} />
        </div>
        <div className="break">
          <Card timePeriod="90 Days" students={phaseThreeStudents} />
          <Card timePeriod="4 Months" students={phaseFourStudents} />
        </div>
        <button
          onClick={() => {
console.log(dates)
         }}
        ></button>
      </div>
    </>
  );
};
