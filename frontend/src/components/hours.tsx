import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "./Nav2";
import "./hours.css";

const Hours = () => {
  const [Hours, setHours] = useState(0);
  const [TeamLead, setTeamLead] = useState("");
  const [Description, setDescription] = useState("");
  const [date, setdate] = useState("");
  const [nxtweek, setnxtweek] = useState("");
  const [resp, setresp] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [validEmail, setvalidEmail] = useState(false);
  const history = useNavigate();

  const DateConverter: React.FC<{ dateString: string }> = ({ dateString }) => {
    const dateObjectUTC = new Date(`${dateString}T24:00:00Z`);

    // Check if the dateObject is a valid date

    // Convert UTC to local time zone
    const dateObjectLocal = new Date(dateObjectUTC.toLocaleString());

    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      month: "long",
      day: "numeric",
    };

    // Use toLocaleDateString with the user's time zone
    const formattedDate = dateObjectLocal.toLocaleDateString(
      undefined,
      options
    );

    return <div>{formattedDate}</div>;
  };

  const val = JSON.parse(localStorage.getItem("Data") || "{}");
  const token = JSON.parse(localStorage.getItem("token") || "{}");
  const usrData = JSON.parse(localStorage.getItem("Data") || "{}");

  usrData["Groups"].map((item: String) => {
    if (item === "Student") {
      history("/UnAuth");
    }
  });

  async function ren() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/Hours/?ymp_id=" + String(val["Id"]),
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      setresp(response.data.reverse());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    if (usrData["Id"] === -999) {
      setIsLoggedIn(false);
    }
    ren();
  }, []); // Run only once when the component mounts

  const handleHours = async (e: React.FormEvent) => {
    setButtonClicked(true);
    e.preventDefault();

    try {
      const usrslst = await axios.get(
        "http://127.0.0.1:8000/users/?email=" + String(TeamLead),
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      const processUser = async (resp: any) => {
        if (resp["groups"][0] === 1 || resp["groups"][0] === 3) {
          const utcDate = new Date(date + "T00:00:00Z")
            .toISOString()
            .split("T")[0];
          const response = await axios.post(
            "http://127.0.0.1:8000/Hours/",
            {
              ymp_id: usrData["Id"],
              hours: Hours,
              work_description: Description,
              teamlead_email: TeamLead,
              next_week_plans: nxtweek,
              date: utcDate,
            },
            {
              headers: {
                Authorization: `Token ${token}`,
              },
            }
          );
          setHours(0);
          setTeamLead("");
          setDescription("");
          setdate("");
          setnxtweek("");

          ren();
        } else {
          alert("Please enter a Real Team Lead Email");
        }
      };
      if (usrslst.data.length > 0) {
        if (usrData["User"] !== usrslst.data[0]["email"]) {
          processUser(usrslst.data[0]);
        } else {
          alert(
            "You cannot log your own hours, Please enter you Team Lead's Email"
          );
        }
      } else {
        alert("No User with that email is Found");
      }
      setButtonClicked(false);
    } catch (error: any) {
      console.error("Signup failed:", error.response.data);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <div className="flex justify-center content-center w-screen h-screen  bg-slate-100">
          <ResponsiveAppBar
            Username={{
              User: usrData["User"],
              Username: usrData["Username"],
              Id: usrData["Id"],
            }}
          />
          <div className="w-full h-auto rounded-lg mx-5 my-12 grid grid-cols-2 text-black">
            <div>
              <div className="justify-center content-center text-center">
                <h1 className="text-3xl font-black  mt-11">
                  {usrData["Username"]}
                </h1>
                <h1 className="text-3xl font-semibold text-gray-400">
                  {usrData["Id"]}
                </h1>
              </div>
              <div className=" Past-Hours">
                {(resp || []).map((item, index) => (
                  <div
                    className="flex mt-7 bg-purple-500 shadow-2xl rounded-xl p-1 grid  grid-cols-4 gap-2"
                    key={index}
                  >
                    <div className="flex w-1/4 pl-3">
                      <h1 className="font-black text-5xl">{item["hours"]}</h1>
                      <h1>hrs</h1>
                    </div>
                    <div className="col-span-3">
                      <h1 className="ml-6 text-xl">
                        <DateConverter dateString={item["date"]} />
                      </h1>
                      <h1 className="ml-6 text-sm">
                        {item["work_description"]}
                      </h1>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form
              className="mb-10 w-full mt-7 text-center mr-14"
              onSubmit={handleHours}
            >
              <div>
                <p className="text-gray-600 text-xl font-medium mt-20 mb-5">
                  Enter information to Log Hours
                </p>
                <p className="w-1/ mb-1 text-gray-700 font-semibold">Hours</p>
                <input
                  className="mb-3 rounded-md py-2 w-1/2 pl-3 boo shadow-xl"
                  type="number"
                  name="enter Hours"
                  value={Hours}
                  required
                  min={0}
                  max={120}
                  onChange={(e) => setHours(parseInt(e.target.value, 10))}
                />
              </div>
              <div>
                <p className=" mb-1 text-gray-700 font-semibold">
                  Team Lead Email
                </p>
                <input
                  className="mb-3 rounded-md py-2 w-1/2 pl-3 boo shadow-xl"
                  type="email"
                  placeholder="Please enter Team Lead Email"
                  value={TeamLead}
                  required
                  onChange={(e) => setTeamLead(e.target.value)}
                />
              </div>
              <div>
                <p className=" mb-1 text-gray-700 font-semibold">
                  Work Description
                </p>
                <input
                  className="mb-3 rounded-md py-2 w-1/2 pl-3 boo shadow-xl"
                  type="text"
                  placeholder="Enter a short description of your work"
                  value={Description}
                  required
                  maxLength={500}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div>
                <p className="mb-1 text-gray-700 font-semibold">Date</p>
                <input
                  className="mb-3 rounded-md py-2 w-1/2 pl-3 boo shadow-xl"
                  type="date"
                  placeholder="Enter a Date"
                  value={date}
                  required
                  onChange={(e) => setdate(e.target.value)}
                />
              </div>
              <div>
                <p className=" mb-1 text-gray-700 font-semibold">
                  Next Week Plans
                </p>
                <input
                  className="mb-3 rounded-md py-2 w-1/2 pl-3 boo shadow-xl"
                  type="text"
                  placeholder="Plans for next week"
                  value={nxtweek}
                  required
                  maxLength={500}
                  onChange={(e) => setnxtweek(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="bg-blue-400 px-20 py-1 mt-3 shadow-xl rounded-md  text-black "
                disabled={buttonClicked}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        history("/UnAuth")
      )}
    </>
  );
};

export default Hours;
