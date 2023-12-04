import React, { useState } from "react";
import "./homePage.css";
interface Prop {
  Username: { User: string; Username: string; Id: number };
}

function Nav(props: Prop) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return (
    <div>
      <ul className="flex bg-stone-100 cursor-pointer w-screen align-center">
        <li className=" my-4 ml-10 text-4xl text-slate-900 hover:text-slate-700 transition w-1/12 font-black logo ">
          YMP
        </li>
        <li className="mx-3 my-5 text-xl font-medium text-slate-900 align-center hover:text-slate-700 transition">
          test1
        </li>
        <li className="mx-3 my-5 text-xl font-medium text-slate-900 hover:text-slate-700 transition">
          test2
        </li>
        <li className="mx-3 my-5 text-xl font-medium text-slate-900 hover:text-slate-700 transition">
          test3
        </li>
        <li className="mx-3 my-5 text-xl font-medium text-slate-900 hover:text-slate-700 transition">
          test3
        </li>
        {props.Username["User"] === "false" ? (
          <div className=" flex w-full justify-end">
            <a
              href="/signup/"
              className="flex justify-end  mr-5 text-xl my-5 font-bold bg-slate-300 p-2 rounded-2xl"
            >
              Signup
            </a>
            <a
              href="/login/"
              className="flex justify-end mr-20 text-xl my-5 font-bold bg-blue-400 p-2 rounded-2xl"
            >
              Login
            </a>
          </div>
        ) : (
          <>
            <p
              className="flex justify-end w-full mx-20 text-xl my-5 font-bold"
              onClick={toggleDropdown}
            >
              {props.Username["Username"]} ▼
            </p>
            {dropdownOpen && (
              <ul className="  absolute bg-white shadow-md justify-end mt-2 right-10 top-11 rounded-lg">
                {/* Dropdown menu items go here */}
                <li className="p-2 hover:bg-blue-500 rounded-lg transition">
                  Email: {props.Username["User"]}
                </li>
                <hr />
                <li className="p-2 hover:bg-blue-500 rounded-lg transition">
                  YMP ID: {props.Username["Id"]}
                </li>
              </ul>
            )}
          </>
        )}
      </ul>
    </div>
  );
}
export default Nav;
