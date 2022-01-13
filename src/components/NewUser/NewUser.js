import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Nav from "../../components/LeftNavBar/nav";
import "./NewUser.css";


export const NewUser = (props) => {
  const navigate = useNavigate();
  const [email, updateEmail] = useState("");
  const [cohort, updateCohort] = useState("");
  const [name, updateName] = useState("");
  const [rank, updateRank] = useState("");
  const [ets, updateEts] = useState("");
  const [leave, updateLeave] = useState(true);

  return (
    <>
      <Nav user={'Create Student'} students={props.ids} />
      <div className="newuser-container">
        <div className="newUserbox">
          <div className="topHeader">Create Account</div>
          <div className="newuser-separator"></div>

            <label for="email" className="newuser-label">Email</label>
            <input
              onChange={(event) => updateEmail(event.target.value)}
              type="email"
              name="email"
              className="newuser-input"
            ></input>

            <label for="email" className="newuser-label">Cohort</label>
            <input
              onChange={(event) => updateCohort(event.target.value)}
              type="text"
              name="cohort"
              className="newuser-input"
            ></input>

            <label for="name" className="newuser-label">Name</label>
            <input
              onChange={(event) => updateName(event.target.value)}
              type="text"
              name="name"
              className="newuser-input"
            ></input>

            <label for="rank" className="newuser-label">Rank</label>
            <input
              onChange={(event) => updateRank(event.target.value)}
              type="text"
              name="rank"
              className="newuser-input"
            ></input>

            <label for="ets" className="newuser-label">ETS</label>
            <input
              onChange={(event) => updateEts(event.target.value)}
              name="ets"
              type="date"
              className="newuser-ets"
            ></input>

            <label htmlFor="leaveChoice" className="newuser-label">Leave</label>
            <select
              id="leaveChoice"
              className="newuser-leave"
              onChange={(event) => updateLeave(event.target.value)}
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>

          <button
            value="CreateUser"
            className="newuser-submit"
            onClick={() => {
              axios
                .post("https://blue-ocean-be.uc.r.appspot.com/api/add-student", {
                  email: email,
                  cohort: cohort,
                  name: name,
                  rank: rank,
                  ets: ets,
                  leave: leave,
                })
                .then(() => {
                  props.onCreate();
                  props.studentcall()
                });
              navigate("/home");
            }}
          >
            Signup
          </button>

          <div></div>
        </div>
      </div>
    </>
  );
};
