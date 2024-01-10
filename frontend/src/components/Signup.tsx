import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import login from "../../public/login.png";
import "./Signup.css";
import ResponsiveAppBar from "./Nav2";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const [lgf, setlgf] = useState(false);
  const [err, seterr] = useState("");
  const history = useNavigate();
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/04D2430AAFE10AA4/signup/", {
        email: email,
        username: username,
        password: password,
      });

      history("/");
      history("/");
      seterr("");
      setlgf(false);
      const token = response.data.token;

      // Store the token in local storage (you might want to use more secure storage)
      localStorage.setItem("token", JSON.stringify(token));
      axios.defaults.headers.common["Authorization"] = `Token ${token}`;

      localStorage.setItem("Data", JSON.stringify(response.data));

      // Redirect or perform other actions on successful signup
    } catch (error: any) {
      seterr(error.response.data["error"]);
      console.log(error.response.data["error"]);

      setlgf(true);
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
      <div className="w-full h-full   grid grid-cols-2 text-black">
        <div className="justify-center content-center text-center">
          <img
            width="auto"
            height="100%"
            className="Login-img"
            src={login}
          ></img>
        </div>
        <div className=" justify-center content-center text-center flex items-center ">
          <form className="mb-10 w-full" onSubmit={handleSignup}>
            <div>
              <div className="justify-center content-center text-center  ">
                <h1 className="font-extrabold logo mb-10 ">YMP</h1>
              </div>
              <h1 className="Login-Title mb-10 font-black">Signup</h1>
              <p className="text-gray-400 info-ft mb-10">
                Sign up for YMP with your information
              </p>
              {lgf === true ? (
                <p className="text-red-600 info-ft font-bold mb-2">{err}</p>
              ) : null}
              <p className="w-1/2 ml-10 mb-1 info-ft text-gray-700 font-semibold">
                Username
              </p>
              <input
                className="mb-3 info-ft rounded-md py-2 w-1/2 pl-3"
                type="text"
                placeholder="Enter your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <p className="w-1/2 ml-6 mb-1 text-gray-700 info-ft font-semibold">
                Email
              </p>
              <input
                className="mb-3 rounded-md info-ft py-2 w-1/2 pl-3 boo"
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div>
              <p className="w-1/2 ml-10 mb-1 info-ft text-gray-700 font-semibold">
                Password
              </p>
              <input
                type="password"
                className="mb-3 info-ft rounded-md py-2 w-1/2 pl-3"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="Redirect-txt">
              {" "}
              Have an account?{" "}
              <a className="text-blue-500 " href="/login/">
                Login!
              </a>
            </p>
            <button
              className="bg-blue-400 Redirect-txt-btn rounded-md shadow-2xl text-black"
              type="submit"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
