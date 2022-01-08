import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./NewUser.css";
import axios from "axios";


export const NewUser = () => {
  const navigate = useNavigate();

  const [email, updateEmail] = useState("");
  const [cohort, updateCohort] = useState("");
  const [name, updateName] = useState("");
  const [rank, updateRank] = useState("");
  const [ets, updateEts] = useState("");
const [leave, updateLeave] = useState(true)




  return (
    <>
      <div className="newUserbox">
        <div className="topHeader">Create Account</div>

        <div className="userInputbasic">
          <div>Email</div>
          <input
            onChange={(event) => updateEmail(event.target.value)}
            type="email"
            name="email"
            className="long"
          ></input>
        </div>
        <div className="userInputbasic">
          <div>Cohort</div>
          <input
            onChange={(event) => updateCohort(event.target.value)}
            type="text"
            name="cohort"
            className="long"
          ></input>
        </div>
        <div className="userInputbasic">
          <div>Name</div>
          <input
            onChange={(event) => updateName(event.target.value)}
            type="text"
            name="name"
            className="long"
          ></input>
        </div>
        <div className="userInputbasic">
          <div>Rank</div>
          <input
            onChange={(event) => updateRank(event.target.value)}
            type="text"
            name="rank"
            className="long"
          ></input>
        </div>
        <div className="userInputshort">
          <div>ETS</div>
          <input
            onChange={(event) => updateEts(event.target.value)}
            name="ets"
            type="date"
            className="short"
          ></input>
        </div>
        <div className="userInputshort">
          <label htmlFor="leaveChoice">Leave</label>
          <select id="leaveChoice" className="short" onChange={(event) => updateLeave(event.target.value)}>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
        </div>
        <button
          value="CreateUser"
          className="signinButton"
          onClick={() => { 
            axios.post(
              "https://blue-ocean-be.uc.r.appspot.com/api/add-student",
              {
                email: email,
                cohort: cohort,
                name: name,
                rank: rank,
                ets: ets,
                leave: leave,
              }
            );
            navigate('/home')
          }}
        >Signup</button>

        <div></div>
      </div>
    </>
  );
};
