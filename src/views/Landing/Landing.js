// import React, { useEffect, useState } from "react";
import "./Landing.css";
import Login from "../../components/Auth/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import soldier_draft from "../../assets/soldier_draft.png";
// import eye from "../../assets/eye.svg";
// import eye_slash from "../../assets/eye-slash.svg";
// import axios from "axios";
// import $ from "jquery";
// import { css } from "@emotion/react";
// import ClipLoader from "react-spinners/ClipLoader";

// const override = css`
//   display: block;
//   margin: 0 auto;
// `;

const Landing = (props) => {
  // let [loading, setLoading] = useState(false);
  // let [color, setColor] = useState("#ffffff");

  // const showHidePassword = (e) => {
  //   let input = document.getElementById("password-input");
  //   input.type = input.type === "password" ? "text" : "password";
  //   e.target.src = input.type === "password" ? eye : eye_slash;
  // };

  return (
    <div id={"login-section"} className={"section"}>
      <div id={"login-section-inner"}>
        <h1 id={"landing-title"}>
          Tracking a new <span id={"landing-title-span"}>YOU</span>
        </h1>
        <img id={"soldier-logo"} className={"img-fluid"} src={soldier_draft} alt={""} />
        <Login />
        {/* <div id={"login-form"} className={"form"}>
          <h3 className={"form-title"}>Login</h3>
          <div className={"form-separator"}> </div>
          <div className={"form-inner"}>
            <div>
              <input
                id={"password-input"}
                type={"password"}
                className={"form-input"}
                placeholder={placeText}
              />
              <img
                className={"show-pw-img"}
                src={eye}
                alt={""}
                onClick={showHidePassword}
              />
            </div>
            <ClipLoader
              color={color}
              loading={loading}
              css={override}
              size={15}
            />
            <button
              className={"form-submit"}
              onClick={() => {
                for (let index = 0; index < props.ids.length; index++) {
                  if (index === props.ids.length - 1) {
                    setTimeout(() => {
                      setColor("red");
                    }, 2000);
                  } else if ($("#password-input").val() === "") {
                    setColor("yellow");
                    setLoading(true);
                  } else if (
                    props.ids[index]["_id"] === $("#password-input").val()
                  ) {
                    navigate("/home");
                    setLoading(false);
                  } else {
                    setColor("grey");
                    setLoading(true);
                  }
                }
              }}
            >
              Login
            </button>
          </div>
        </div> */}
        <p id={"password-prompt"} className={"form-prompt"}>
          Forgot your password? Click{" "}
          <a className={"form-link"} href={"/"}>
            here
          </a>
        </p>
        <p id={"signup-prompt"} className={"form-prompt"}>
          Don't have an account? Signup{" "}
          <a className={"form-link"} href={"/"}>
            here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Landing;
