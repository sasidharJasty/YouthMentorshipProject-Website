import { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom"
import ResponsiveAppBar from "./Nav2";

export default function Reset(){
    const { search } = useLocation();
  const params = new URLSearchParams(search);
  const [, setResponseData] = useState<any | null>(null);
    const [error, setError] = useState<string | null>(null);
  const token = params.get('token');

    const [password, setpassword] = useState("");
    const [buttonClicked, setButtonClicked] = useState(false);
    const usrData = JSON.parse(localStorage.getItem("Data") ||"{User:'Login',Username:'Login',Id:-999,Groups:'Students'}");
    const handleReset = async (e: React.FormEvent) => {
        e.preventDefault();
    
        setButtonClicked(true);
    
        try {
          const response = await axios.post(
            "http://127.0.0.1:8000/04D2430AAFE10AA4/password_reset/confirm/",
            {
              password: password,
              token:token
            }
          );
          const responseData = response.data;
          setError(null); 
          setResponseData(responseData);
          if(responseData.status === "OK" ){
            setError("Password Reset successfully, Please login"); 
          }
          

        } catch (error:any) {
            try{setError( error.response.data.password[0]);}catch{if(error.response.data.detail === "Not found."){setError("Invalid Reset Token Please try again");}else{setError(error.response.data.detail );}}
          
          setResponseData(null);
        }
    
        setButtonClicked(false);
      };
    return (< div className="bg-purple-300 h-screen">
        <ResponsiveAppBar Username={{
              User: usrData["User"],
              Username: usrData["Username"],
              Id: usrData["Id"],
            }} />
            <form
              className="mb-10 w-full pt-60 text-center mr-14"
              onSubmit={handleReset}
            >
                <p className="text-white text-2xl font-black mt-20 mb-5">
                  Enter password to reset password
                </p>
                
              <div>
                <input
                  className="mb-3 rounded-md py-2 w-1/2 pl-3 boo shadow-xl"
                  type="text"
                  placeholder="password of account"
                  value={password}
                  required
                  maxLength={500}
                  onChange={(e) => setpassword(e.target.value)}
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