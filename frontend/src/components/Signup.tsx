import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import login from "./login.png";
import vect from "./Vector.png";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setemail] = useState("");
  const history = useNavigate();
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/signup/", {
        email: email,
        username: username,
        password: password,
      });

      console.log("Signup successful!", response.data.message);
      history("/");

      // Redirect or perform other actions on successful signup
    } catch (error: any) {
      console.error("Signup failed:", error.response.data);
    }
  };

  return (
    <div className="flex justify-center content-center w-screen h-screen ">
      <div className="w-auto h-auto bg-slate-100  rounded-lg mx-5 my-12 shadow-2xl grid grid-cols-2 text-black">
        <div className="justify-center content-center text-center  ">
          <img className=" m-1 " src={login}></img>
        </div>
        <div className=" justify-center content-center text-center flex items-center ">
          <form className="mb-10 w-full" onSubmit={handleSignup}>
            <div>
              <div className="justify-center content-center text-center  ">
                <img className=" m-1 " src={vect}></img>
              </div>
              <h1 className="text-5xl mb-10 font-black">Signup</h1>
              <p className="text-gray-400 font-medium mb-10">
                Sign up for YMP with your information
              </p>
              <p className="w-1/2 ml-10 mb-1 text-gray-700 font-semibold">
                Username
              </p>
              <input
                className="mb-3 rounded-md py-2 w-1/2 pl-3"
                type="text"
                placeholder="Enter your Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <p className="w-1/2 ml-6 mb-1 text-gray-700 font-semibold">
                Email
              </p>
              <input
                className="mb-3 rounded-md py-2 w-1/2 pl-3"
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div>
              <p className="w-1/2 ml-10 mb-1 text-gray-700 font-semibold">
                Password
              </p>
              <input
                type="password"
                className="mb-3 rounded-md py-2 w-1/2 pl-3"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="">
              {" "}
              Don't have an account{" "}
              <a className="text-blue-500" href="/">
                sign up!
              </a>
            </p>
            <button
              className="bg-blue-400 px-20 py-1 mt-3 rounded-md text-black"
              type="submit"
            >
              Signup
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
