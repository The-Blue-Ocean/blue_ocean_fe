import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Nav from "../../components/LeftNavBar/nav";
import "./deleteuser.css";

export const DeleteUser = (props) => {
  const navigate = useNavigate();

  console.log(props.students)

  return (
    <>
      <Nav user={'Delete Student'} students={props.ids} />
      <div className="deleteusercontainer">
        <div className="userbox">
          <div className="title">Select a Student to Delete</div>
          <div className="delete-separator"></div>
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
                        .then(() => { navigate('/home') });
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
    </>

  );
};
