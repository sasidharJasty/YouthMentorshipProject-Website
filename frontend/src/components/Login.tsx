import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import login from "./login.png";
import "./Signup.css";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

interface Props {
  handleLogin: (val: { User: string; Username: string; Id: number }) => void;
}

function Login(props: Props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [lgf, setlgf] = useState(false);
  const [err, seterr] = useState("");

  const history = useNavigate();
  const height = 100;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/login/", {
        username: username,
        password: password,
      });

      // Assuming the Django API returns a token on successful login
      const token = response.data.token;

      // Store the token in local storage (you might want to use more secure storage)

      // Redirect or perform other actions on successful login
      history("/");
      seterr("");
      setlgf(false);
      localStorage.setItem("Data", JSON.stringify(response.data));
      props.handleLogin(response.data);
    } catch (error: any) {
      //console.error("login failed:", error.response.data["error"]);
      seterr(error.response.data["error"]);
      props.handleLogin({ User: "false", Username: "False", Id: -99 });
      setlgf(true);
    }
  };

  return (
    <div className="fixed justify-center content-center w-screen h-screen bg-slate-100">
      <div className="w-screen h-screen   grid grid-cols-2 text-black">
        <div className="justify-center content-center text-center  ">
          <img width="Auto" height={height} className=" m-1" src={login}></img>
        </div>

        <div className=" justify-center content-center text-center flex items-center ">
          <form className="mb-10 w-full" onSubmit={handleLogin}>
            <div>
              <div className="justify-center content-center text-center  ">
                <h1 className="font-extrabold text-3xl logo mb-10 ">YMP</h1>
              </div>
              <h1 className="text-5xl mb-10 font-black">Login</h1>
              <p className="text-gray-400 font-medium mb-10">
                Login into YMP with your information
              </p>
              {lgf === true ? (
                <p className="text-red-600 text-lg font-bold mb-2">{err}</p>
              ) : null}
              <p className="w-1/2 ml-6 mb-1 text-gray-700 font-semibold">
                Email
              </p>
              <input
                className="mb-3 rounded-md py-2 w-1/2 pl-3 boo"
                type="text"
                placeholder="Enter your Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <p className="w-1/2 ml-10 mb-1 text-gray-700 font-semibold">
                Password
              </p>

              <input
                className="mb-3 rounded-md py-2 w-1/2 pl-3 boo"
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <p className="">
              {" "}
              Don't have an account?{" "}
              <a className="text-blue-500" href="/signup/">
                Sign Up!
              </a>
            </p>
            <button
              className="bg-blue-400 px-20 py-1 mt-3 rounded-md shadow-2xl text-black"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
