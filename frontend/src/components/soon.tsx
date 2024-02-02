import ResponsiveAppBar from "./Nav2";
import "./Page_Not_Found.css";

export default function Soon() {
  const usrData = JSON.parse(
    localStorage.getItem("Data") || '{"User":"Login","Username":"Login","Id":-999,"Groups":"Students"}'
  );
  console.log(usrData);
  return (
    <div className="w-screen h-screen">
      <div className="absolute text-center h-screen">
        <div className="font-black num absolute z-10 w-screen">
          <h1 className="">503</h1>
        </div>
        <div className="z-20 relative w-screen txt">
          <h1>
            Page Coming Soon
          </h1>
          <a className="btn mt-20" href="/">
            Return Home
          </a>
        </div>
      </div>
      <div className="z-50 fixed">
        <ResponsiveAppBar
          Username={{
            User: usrData["User"],
            Username: usrData["Username"],
            Id: usrData["Id"],
          }}
        />
      </div>
    </div>
  );
}
