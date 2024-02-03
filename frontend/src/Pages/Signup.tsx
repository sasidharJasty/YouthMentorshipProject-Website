import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import login from "../images/login.png";
import "./Signup.css";
import ResponsiveAppBar from "../components/Nav2";
import Global from '../settings';
import Logo from "../images/Logo.png";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const [err, seterr] = useState("");
  const history = useNavigate();
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://"+Global.apiUrl+"/signup/", {
        email: email,
        username: username,
        password: password,
      });
      history("/");
      seterr("");
      const token = response.data.token;
      localStorage.setItem("token", JSON.stringify(token));
      axios.defaults.headers.common["Authorization"] = `Token ${token}`;
      localStorage.setItem("Data", JSON.stringify(response.data));
    } catch (error: any) {
      seterr(error.response.data["error"]);
    }
  };

  return (
    <div className="lg:fixed justify-center content-center w-full h-full bg-slate-100">
      <ResponsiveAppBar
        Username={{
          User: email,
          Username: username,
          Id: -999,
        }}
      />
      <div className="w-full h-full grid grid-cols-2 text-black">
        <div className="justify-center content-center text-center">
          <img
            width="auto"
            height="100%"
            className="Login-img"
            src={login}
            alt="Login"
          ></img>
        </div>
        <div className="justify-center content-center text-center flex items-center ">
          <form className="mb-10 w-full" onSubmit={handleSignup}>
            <div>
              <div className="justify-center content-center flex text-center  ">
                <img className="flex" src={Logo}></img>
              </div>
              <h1 className="Login-Title mb-3 font-black">Signup</h1>
              <p className="text-gray-400 info-ft mb-4">
                Sign up for YMP with your information
              </p>
              {err !== "" ? (
                <p className="text-red-600 info-ft font-bold mb-2">{err}</p>
              ) : null}
              <div className="mb-3 info-ft">
                <p className="w-1/2 ml-10 mb-1 info-ft text-gray-700 font-semibold">
                  Username
                </p>
                <input
                  className="mb-3 info-ft rounded-md py-2 w-1/2 pl-3"
                  type="text"
                  placeholder="Enter your Username"
                  autoComplete="nickname"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3 rounded-md info-ft">
                <p className="w-1/2 ml-6 mb-1 text-gray-700 info-ft font-semibold">
                  Email
                </p>
                <input
                  className="mb-3 rounded-md info-ft py-2 w-1/2 pl-3 boo"
                  type="email"
                  placeholder="Enter your Email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className="mb-3 info-ft">
                <p className="w-1/2 ml-10 mb-1 info-ft text-gray-700 font-semibold">
                  Password
                </p>
                <input
                  type="password"
                  className="mb-3 info-ft rounded-md py-2 w-1/2 pl-3"
                  placeholder="Enter your Password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="">
                <p className="Redirect-txt">
                  {" "}
                  Have an account?{" "}
                  <a className="text-blue-500" href="/login/">
                    Login!
                  </a>
                </p>
                <p className="Redirect-txt mb-10">
                  {" "}
                  {" "}
                  <a className="text-blue-500" href="/forgot-password/">
                    Forgot Password?
                  </a>
                </p>
              </div>
              <button
                className="bg-blue-400 Redirect-txt-btn rounded-md shadow-2xl text-black"
                type="submit"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;