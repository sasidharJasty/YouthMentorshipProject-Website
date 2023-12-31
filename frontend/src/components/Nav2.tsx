import { useState } from "react";
import "./homePage.css";
import axios from "axios";
import "./Nav2.css";
import tik from "./s-tik.png";
import linkedin from "./s-linkedin.png";
import insta from "./s-insta.png";
import facebook from "./s-face.png";
import youtube from "./s-youtube.png";
import discord from "./s-discord.png";
import Logo from "./Logo.png";

interface Prop {
  Username: { User: string; Username: string; Id: number };
}

function ResponsiveAppBar(props: Prop) {
  const [Selects, setSelect] = useState(false);

  const handleOpen = () => {
    setSelect((Selects) => !Selects);
  };
  async function logout() {
    await axios.post("http://127.0.0.1:8000/logout/");
    localStorage.setItem(
      "Data",
      JSON.stringify({
        User: "false",
        Username: "false",
        Id: -999,
      })
    );
    JSON.parse(localStorage.getItem("Data") || "{}");
  }

  return (
    <nav className=" fixed bg-white border-gray-200  shadow-2xl top-0 dark:bg-gray-900 pb-2 w-screen mb-40 justify-center justify-content-center text-center bg-opacity-80 dark:bg-opacity-95">
      <div className="w-screen flex flex-wrap items-center justify-between  ">
        <a
          target="_blank"
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <h2 className=" my-4 ml-20 Logo-txt  verticalLine pr-2 font-black logo ">
            <img src={Logo} className="NAV-Logo"></img>
          </h2>
          <span className="text-left Logo-sd font-normal  whitespace-nowrap text-black dark:text-white">
            Youth
            <br />
            Mentorship
            <br />
            Project
          </span>
        </a>
        <div className="items-center md:order-2 space-x-3  rtl:space-x-reverse mr-40">
          <ul className="flex ">
            <li className="Link">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/youth-mentorship-proj/"
              >
                <img src={tik} className=" NAV-socials"></img>
              </a>
            </li>
            <li className="Link">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/youth-mentorship-proj/"
              >
                <img src={linkedin} className=" NAV-socials"></img>
              </a>
            </li>
            <li className="Link">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/youth-mentorship-proj/"
              >
                <img src={insta} className=" NAV-socials"></img>
              </a>
            </li>
            <li className="Link">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/youth-mentorship-proj/"
              >
                <img src={facebook} className=" NAV-socials"></img>
              </a>
            </li>
            <li className="Link">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/youth-mentorship-proj/"
              >
                <img src={youtube} className=" NAV-socials"></img>
              </a>
            </li>
            <li className="Link">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/youth-mentorship-proj/"
              >
                <img src={discord} className=" NAV-socials"></img>
              </a>
            </li>
          </ul>
          <div className="flex items-center md:order-2 space-x-3  rtl:space-x-reverse pl-14">
            <button
              type="button"
              className="flex px-3 py-2 btn-txt bg-purple-500 rounded-xl md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
              onClick={handleOpen}
            >
              <span className="sr-only">Open user menu</span>
              <p className="">
                {props.Username["Id"] !== -999 ? (
                  <p className="">{props.Username["Username"]} ▼</p>
                ) : (
                  <a className="text-white " href="/login/">
                    Log In
                  </a>
                )}{" "}
              </p>
            </button>

            <button
              type="button"
              className="flex px-3 py-2 ml-5 btn-txt bg-blue-500 text-white rounded-xl md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
              id="user-menu-button"
              aria-expanded="false"
              data-dropdown-toggle="user-dropdown"
              data-dropdown-placement="bottom"
            >
              <span className="sr-only">Open user menu</span>
              <a target="_blank" className="">
                Donate
              </a>
            </button>

            {Selects === true && props.Username["Id"] !== -999 ? (
              <>
                {" "}
                <div className=" absolute top-5 my-10 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-xl dark:bg-gray-700 dark:divide-gray-600">
                  <div className="px-4 py-3">
                    <span className="block text-sm text-gray-900 dark:text-white">
                      {props.Username["User"]}
                    </span>
                    <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                      {props.Username["Id"]}
                    </span>
                  </div>
                  <ul className="py-2" aria-labelledby="user-menu-button">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Settings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      >
                        Earnings
                      </a>
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
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
          <ul className="flex flex-col Nav-txt font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-opacity-80 dark:bg-opacity-95">
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
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Programs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Membership
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Partnership
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default ResponsiveAppBar;
