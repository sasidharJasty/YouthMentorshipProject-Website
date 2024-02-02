import React, { useState } from "react";
import axios from "axios";
import ResponsiveAppBar from "./Nav2";

export default function Forgot(){
    const [email, setemail] = useState("");
    const [, setResponseData] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [buttonClicked, setButtonClicked] = useState(false);
    const usrData = JSON.parse(localStorage.getItem("Data") ||'{"User":"Login","Username":"Login","Id":-999,"Groups":"Students"}');
    const handleForgot = async (e: React.FormEvent) => {
        e.preventDefault();
    
        setButtonClicked(true);
    
        try {
          const response = await axios.post(
            "https://127.0.0.1:8000/04D2430AAFE10AA4/password_reset/",
            {
              email: email,
            }
          );
          const responseData = response.data;
          setResponseData(responseData);
          setError(null); 
           if(responseData.status == "OK"){
                setError("Please check your email for the password reset link");
            }
        } catch (error:any) {
          console.error("Error during password reset:", error);
    
          setError( error.response.data.email[0]);
          setResponseData(null);
        }
    
        
      };
    return (< div className="bg-purple-300 h-screen">
        <ResponsiveAppBar Username={{
              User: usrData["User"],
              Username: usrData["Username"],
              Id: usrData["Id"],
            }} />
            <form
              className="mb-10 w-full pt-60 text-center mr-14"
              onSubmit={handleForgot}
            >
                <p className="text-gray-700 text-4xl font-black mt-20 mb-5">
                  Enter Email to reset password
                </p>
                
              <div>
                <input
                  className="mb-3 rounded-md py-2 w-1/2 pl-3 boo shadow-xl"
                  type="email"
                  placeholder="email of account"
                  value={email}
                  disabled={buttonClicked}
                  required
                  maxLength={500}
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <p className=" text-orange-700 info-ft font-bold mb-2">{error}</p>

              <button
                type="submit"
                className="bg-blue-400 px-20 py-1 mt-3 shadow-xl rounded-md  text-black "
                disabled={buttonClicked}
              >
                Submit
              </button>
            </form>
    </div>);
    
}