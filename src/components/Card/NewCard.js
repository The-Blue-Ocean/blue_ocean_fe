// import React, { useEffect } from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
const Card = (props) => {
  const navigate = useNavigate()
  
  
    return (
    <div className="card">
      <p className="time-period">{props.timePeriod}</p>
      <div className="card-separator"></div>
      <div className="studentcontainer">
        <div>
          {props.students.map((student) => {
            return <button  value={student._id} className="student" onClick={(e) => { 
                props.studentID(e.target.value)
                
                navigate('/student')
            
            }}> - {student.name}</button>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
