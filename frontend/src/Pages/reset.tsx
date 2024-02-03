import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ResponsiveAppBar from "../components/Nav2";
import Global from '../settings';

export default function Reset() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const token = params.get("token");
  const [error, setError] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);

  const usrData = JSON.parse(localStorage.getItem("Data") || '{"User":"Login","Username":"Login","Id":-999,"Groups":"Students"}');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    setButtonClicked(true);
    try {
      const response = await axios.post("https://"+Global.apiUrl+"/password_reset/confirm/", {
        password,
        token,
      });
      setError(null);
      if (response.data.status === "OK") {
        setError("Password reset successfully. Please login.");
      }
    } catch (error: any) {
      try {
        setError(error.response.data.password[0]);
      } catch {
        setError(error.response.data.detail === "Not found." ? "Invalid reset token. Please try again." : error.response.data.detail);
      }
    }
    setButtonClicked(false);
  };
  return (
    <div className="bg-purple-300 h-screen">
      <ResponsiveAppBar
        Username={{
          User: usrData["User"],
          Username: usrData["Username"],
          Id: usrData["Id"],
        }}
      />
      <form className="mb-10 w-full pt-60 text-center mr-14" onSubmit={handleReset}>
        <p className="text-white text-2xl font-black mt-20 mb-5">Enter password to reset password</p>

        <div>
          <input
            className="mb-3 rounded-md py-2 w-1/2 pl-3 boo shadow-xl"
            type="password"
            placeholder="Password of account"
            value={password}
            required
            maxLength={500}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <p className="text-orange-700 info-ft font-bold mb-2">{error}</p>

        <button
          type="submit"
          className="bg-blue-400 px-20 py-1 mt-3 shadow-xl rounded-md text-black"
          disabled={buttonClicked}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
