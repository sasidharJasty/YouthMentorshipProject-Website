import React, { useState } from "react";
import axios from "axios";
import Nav from "./Nav";
import ResponsiveAppBar from "./Nav2";

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
    <ResponsiveAppBar
      Username={{
        User: val["User"],
        Username: val["Username"],
        Id: val["Id"],
      }}
    />
  );
}
