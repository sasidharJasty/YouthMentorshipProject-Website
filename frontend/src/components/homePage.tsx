import React, { useState } from "react";
import axios from "axios";
import bg from "./bg.png";
import ResponsiveAppBar from "./Nav2";
import Item from "./Item";

interface Prop {}
/*<Nav
      Username={{
        User: props.Username["User"],
        Username: props.Username["Username"],
        Id: props.Username["Id"],
      }}
    />*/
export default function Home(props: Prop) {
  const val = JSON.parse(localStorage.getItem("Data") || "{}");
  return (
    <div className="">
      <div>
        <div className="">
          <img
            className="z-1 absolute img"
            width="110%"
            src="https://i.ibb.co/6y0dx0Z/Whats-App-Image-2023-12-03-at-19-19-48-98168732.jpg"
          />
          <div className="flex z-1  mt-40 ml-40">
            <div className="relative z-1 title-container mt-10">
              <h1 className="relative font-bold TitleText   ">
                Teach the
                <br />
              </h1>
              <h1 className="relative font-bold TitleText   ">
                youth. Shape
                <br />
              </h1>
              <h1 className="relative font-bold TitleText ">
                the future.
                <br />
              </h1>
              <div className="mt-7 ml-12">
                <a href="/signup" className="relative font-medium Title-btn ">
                  {" "}
                  Join YMP for free
                </a>
              </div>
            </div>
            <img
              className="z-3 relative girlslearn  "
              src="https://i.ibb.co/Y2mRTpc/girlslearn-1.png"
            />
          </div>
        </div>

        <div className="z-6 relative mt-5">
          <div className="z-4 absolute  Carousel-info ml-5 mt-10 pb-10 mr-10">
            <div className="w-3/12 ml-7 mt-5">
              <h1 className="mb-10  c-title font-semibold">
                How can mentorship catapult your project's impact?
              </h1>
              <h3 className="text-black c-text ">
                With access to our vast network of mentors, you can develop a
                project of your choosing with professional guidance. New skills
                learned through projects translate directly to amazing
                opportunities in the future.
              </h3>
            </div>
          </div>
          <div className="z-5 absolute flex Carousel columns-3 right-5 pb-10 pl-40 mr-10">
            <Item
              url="https://i.ibb.co/ZVy8xvC/IMG-3338-1.png"
              title="Upcoming Events"
              description="Explore upcoming and previous events at YMP that you can participate in virtually and in person."
            />
            <Item
              url="https://i.ibb.co/ZVy8xvC/IMG-3338-1.png"
              title="Upcoming Events"
              description="Explore upcoming and previous events at YMP that you can participate in virtually and in person."
            />
            <Item
              url="https://i.ibb.co/ZVy8xvC/IMG-3338-1.png"
              title="Upcoming Events"
              description="Explore upcoming and previous events at YMP that you can participate in virtually and in person."
            />
          </div>
        </div>

        <div className="fixed z-50">
          <ResponsiveAppBar
            Username={{
              User: val["User"],
              Username: val["Username"],
              Id: val["Id"],
            }}
          />
        </div>
        <div className="h-screen bg"></div>
      </div>
    </div>
  );
}
