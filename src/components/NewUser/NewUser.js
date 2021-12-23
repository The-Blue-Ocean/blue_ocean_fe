import React from "react";
import { useNavigate } from "react-router-dom";
import "./NewUser.css";

export const NewUser = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="newUserbox">
        <div className="topHeader">Create Account</div>
        <div className="userInputbasic">
          <div>Email</div>
          <input className="long"></input>
        </div>
        <div className="userInputbasic">
          <div>Password</div>
          <input className="long"></input>
        </div>
        <div className="userInputbasic">
          <div>Name</div>
          <input className="long"></input>
        </div>
        <div className="userInputbasic">
          <div>Rank</div>
          <input className="long"></input>
        </div>
        <div className="userInputshort">
          <div>ETS</div>
          <input type="date" className="short"></input>
        </div>
        <div className="userInputshort">
          <div>Leave</div>
          <input type="date" className="short"></input>
        </div>
        <button className="signinButton" onClick={() => navigate('/home')}>Create User</button>
        <div>
        </div>
      </div>
    </>
  );
};
