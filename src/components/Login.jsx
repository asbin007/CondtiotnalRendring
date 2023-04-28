import React from "react";
import Input from "./Input";

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="username" />
      <Input type="text" placeholder="password" />
      {props.isRegiter === false && (
        <Input type="text" placeholder=" confirm password" />
      )}
      <button type="submit">{props.isRegiter ? "Login" : "Register"}</button>
    </form>
  );
}

export default Login;
