import { useState, useEffect } from "react";

import axios from "axios";
import "./Nav2.css";
import linkedin from "../images/socials/s-linkedin.png";
import insta from "../images/socials/s-insta.png";
import discord from "../images/socials/s-discord.png";
import Logo from "../images/Logo.png";
import Global from '../settings';
import { useNavigate } from "react-router-dom";

interface Prop {
  Username: { User: string; Username: string; Id: number };
}

function ResponsiveAppBar(props: Prop) {
  const [selectedItem, setSelectedItem] = useState(false);
  const [selects, setSelect] = useState(false);
  const [user, setUser] = useState(props.Username.Id);
  const usrData = JSON.parse(localStorage.getItem("Data") || '{"User":"Login","Username":"Login","Id":-999,"Groups":"Students"}');
  const history = useNavigate();

  const closePopup = () => {
    setSelectedItem(false);
  }

  const openPopup = () => {
    setSelectedItem(true);
  }

  const handleOpen = () => {
    if (user === -999) {
      history("/login/");
    } else {
      setSelect(!selects);
    }
  };

  useEffect(() => {
    if (props.Username.Id === -999) {
      setUser(-999);
    }
  }, []);

  async function logout() {
    try {
      await axios.post("https://"+Global.apiUrl+"/logout/");
      setSelect(false);
      setUser(-999);
    } catch (error: any) {
      console.error("Logout failed:", error.response.data);
    }

    setSelect(false);
    localStorage.removeItem("token");
    localStorage.clear();
    setUser(-999);
    delete axios.defaults.headers.common["Authorization"];
    localStorage.setItem(
      "Data",
      JSON.stringify({
        User: "false",
        Username: "false",
        Id: -999,
        Group: "Student",
      })
    );
  }

  return (
    <nav className="fixed bg-white border-gray-200 shadow-2xl top-0 dark:bg-gray-900 pb-2 w-screen mb-40 justify-center justify-content-center text-center bg-opacity-80 dark:bg-opacity-95">
      <div className="w-screen flex flex-wrap items-center justify-between">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <h2 className="my-4 ml-20 Logo-txt verticalLine pr-2 font-black logo">
            <img src={Logo} className="NAV-Logo" alt="Logo"></img>
          </h2>
          <span className="text-left Logo-sd font-normal whitespace-nowrap text-black dark:text-white">
            Youth
            <br />
            Mentorship
            <br />
            Project
          </span>
        </a>

        <div className="items-center md:order-2 space-x-3 rtl:space-x-reverse mr-40">
          <ul className="flex ml-20">
            <li className="Link">
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/youth-mentorship-proj/">
                <img src={linkedin} className="nsocials" alt="LinkedIn"></img>
              </a>
            </li>
            <li className="Link">
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/youthmentorshipproject/">
                <img src={insta} className="nsocials" alt="Instagram"></img>
              </a>
            </li>

            <li className="Link">
              <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/mCWDhdtmdS">
                <img src={discord} className="nsocials" alt="Discord"></img>
              </a>
            </li>
          </ul>
          <div className="flex items-center md:order-2 space-x-3 rtl:space-x-reverse pl-14">
            <button
              type="button"
              className="flex px-3 py-2 bg-purple-500 rounded-xl md:me-0 focus:ring-4 test-sm focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              onClick={handleOpen}
            >
              <span className="sr-only">Open user menu</span>
              <div>
                {user !== -999 ? (
                  <p className="">{props.Username.Username} ▼</p>
                ) : (
                  <a className="text-white" href="/login/">
                    Log In
                  </a>
                )}
              </div>
            </button>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://hcb.hackclub.com/donations/start/youthmentorshipproject"
              className=""
            >
              <button
                type="button"
                className="flex px-3 py-2 t bg-blue-500 text-white rounded-xl md:me-0 focus:ring-4 text-sm focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
              >
                <span className="sr-only">Open user menu</span>
                Donate
              </button>
            </a>

            {selects && props.Username.Id !== -999 ? (
              <>
                <div className="absolute top-11 my-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-xl dark:bg-gray-700 dark:divide-gray-600">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {props.Username.User}
                    </span>
                    <span className="block text-sm text-gray-500 truncate dark:text-gray-400">
                      {props.Username.Id}
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    {usrData.Groups[0] !== "Student" ? (
                      <li>
                        <a
                          href="/hours"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        >
                          Hours
                        </a>
                      </li>
                    ) : null}
                    <li>
                      <a
                        href="/forgot-password"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Password Change
                      </a>
                    </li>
                    <li>
                      <h1
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                        onClick={openPopup}
                      >
                        Profile
                      </h1>
                    </li>
                    <li>
                      <a
                        href="/"
                        onClick={logout}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </>
            ) : null}
            <button
              data-collapse-toggle="navbar-user"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-user"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 mx-10"
          id="navbar-user"
        >
          <ul className="flex flex-col text-sm font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-opacity-80 dark:bg-opacity-95">
            <li>
              <a
                href="/"
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 bg-opacity-80 dark:bg-opacity-95"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/soon/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/soon/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Programs
              </a>
            </li>
            <li>
              <a
                href="/soon/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Membership
              </a>
            </li>
            <li>
              <a
                href="/soon/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="/soon/"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Partnership
              </a>
            </li>
          </ul>
        </div>
      </div>
      {selectedItem && (
        <>
          <div
            className="overlay"
            onClick={closePopup}
            style={{ zIndex: 9998 }}
          />
          <div className="popup" style={{ zIndex: 9999 }}>
            <div className="popup-content text-center">
              <h1 className="font-black text-lg text-center">Information</h1>
              <hr />
              <br />
              <br />
              <div className="grid grid-cols-3 gap-4 text-left w-full h-full">
                <div className="w-full h-full CONTENT"></div>
                <div className="col-span-2 grid grid-cols-2 w-full gap-x-20 gap-y-10">
                  <h2><strong>Username </strong><br /> {usrData.Username}</h2>
                  <p><strong>YMP ID</strong> <br />{usrData.Id}</p>
                  <p className="" ><strong>Email</strong><br />{usrData.User}</p>
                  <p className=""><strong>Role</strong><br />{usrData.Groups[0]}</p>
                </div>
              </div>
              <br />
              <br />
              <button onClick={closePopup}>Close Popup</button>
            </div>
          </div>
        </>
      )}
    </nav>
  );
}

export default ResponsiveAppBar;
