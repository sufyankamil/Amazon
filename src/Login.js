import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
  };

  const register = (e) => {
    e.preventDefault();
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          console.log(auth);
          // success created new user with email and password
        })
        .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login--logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=" amazon logo "
        />
      </Link>

      <div className="login--container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={signIn} className="login--signButton">
            Sign In
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <button
            type="submit"
            onClick={register}
            className="login--registerButton"
          >
            Create your Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
