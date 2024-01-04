import ResponsiveAppBar from "./Nav2";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/*<Nav
      Username={{
        User: props.Username["User"],
        Username: props.Username["Username"],
        Id: props.Username["Id"],
      }}
    />*/
export default function Logout() {
  const val = JSON.parse(localStorage.getItem("Data") || "{}");
  const history = useNavigate();
  async function logout() {
    const response = await axios.post("http://127.0.0.1:8000/logout/");
    localStorage.setItem(
      "Data",
      JSON.stringify({
        User: "false",
        Username: "false",
        Id: -999,
        Group:"Student"
      })
    );
    localStorage.clear();
    localStorage.setItem(
      "Data",
      JSON.stringify({
        User: "false",
        Username: "false",
        Id: -999,
        Group:"Student"
      })
    );

    history("/");
    const val = JSON.parse(localStorage.getItem("Data") || "{}");
  }
  return (
    <div className="relative">
      <div className=" relative top-20 justify-center text-center align-center h-full w-full content-center">
        <p
          className="p-5 mt-40 bg-purple-500 w-fit content-center rounded-2xl"
          onClick={logout}
        >
          Log out
        </p>
      </div>
    </div>
  );
}
