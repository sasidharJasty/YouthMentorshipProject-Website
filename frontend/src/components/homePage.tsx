import React, { useState } from "react";
import axios from "axios";
import bg from "./bg.png";
import ResponsiveAppBar from "./Nav2";
import Item from "./Item"

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
      
      <div className="">
      <img className="absolute img" src="https://i.ibb.co/6y0dx0Z/Whats-App-Image-2023-12-03-at-19-19-48-98168732.jpg" />
      <img className="absolute girlslearn right-10 "src="https://i.ibb.co/Y2mRTpc/girlslearn-1.png" />
      <div className="relative title-container">
      <h1 className="absolute font-bold TitleText text-7xl left-40 mt-10 top-0">Teach the<br/></h1>
      <h1 className="absolute font-bold TitleText text-7xl left-40 mt-10 top-20">youth. Shape<br/></h1>
      <h1 className="absolute font-bold TitleText text-7xl left-40 mt-10 top-40">the future.<br/></h1>
      <a href="/signup" className="absolute font-medium Title-btn text-2xl mt-10 top-60"> Join YMP for free</a>
      </div>
      </div>
      <div className="bg-white  absolute flex Carousel m-10 colums-4">
        <div className="w-full">Content</div>
        <h3 className="w-full"><Item url="https://i.ibb.co/ZVy8xvC/IMG-3338-1.png" title = 'upcoming events'description="Explore upcoming and previous events at YMP that you can participate in virtually and in person."/></h3>
        <h3 className="w-full">Content</h3>
        <h3 className="w-full">Content</h3>
      </div>
      
      <div className="fixed">
    <ResponsiveAppBar
      Username={{
        User: val["User"],
        Username: val["Username"],
        Id: val["Id"],
      }}
    />
    </div>
      
      



    </div>
  );
}
