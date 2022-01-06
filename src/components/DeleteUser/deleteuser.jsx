import React, { useEffect } from "react";
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
                  // Call to delete the selected student
                  axios.delete(
                    `https://blue-ocean-be.uc.r.appspot.com/api/del-student/${e.target.value
                      .split(" ")
                      .join("")}`
                  ).then(() => { // After post request, call props on delete handler to set state
                    props.onDelete()
                      // After delete handler has set state, then navigate to home
                      .then(() => {navigate('/home')});
                  });
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
