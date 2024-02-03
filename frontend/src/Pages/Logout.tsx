import { useNavigate } from "react-router-dom";
import axios from "axios";
import Global from '../settings';

export default function Logout() {
  const history = useNavigate();
  async function logout() {
    await axios.post("https://"+Global.apiUrl+"/logout/");
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
