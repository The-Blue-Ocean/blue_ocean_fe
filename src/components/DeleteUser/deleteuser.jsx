import React from "react";
import { useNavigate } from "react-router-dom";
import "./deleteuser.css";
import axios from "axios";

export const DeleteUser = (props) => {
  const navigate = useNavigate();

  return (
    <div className="deleteusercontainer">
      <div className="userbox">
        <div className="title">Select a Student to Delete</div>
        <div>
          {props.students.map((element, index) => {
            return (
              <button
                className="student"
                onClick={(e) => {
                  axios.delete(
                    `https://blue-ocean-be.uc.r.appspot.com/api/del-student/${e.target.value
                      .split(" ")
                      .join("")}`
                  );
                  navigate('/home')
                  
                }}
                key={element["_id"]}
                value={element["_id"]}
              >
                {element["name"]}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
///api/del-student/
