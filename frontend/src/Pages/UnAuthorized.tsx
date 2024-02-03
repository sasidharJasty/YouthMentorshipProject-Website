import ResponsiveAppBar from "../components/Nav2";
import "./Page_Not_Found.css";

export default function UnAuthorized() {
  const usrData = JSON.parse(
    localStorage.getItem("Data") || '{"User":"Login","Username":"Login","Id":-999,"Groups":"Students"}'
  );

  return (
    <div className="w-screen h-screen">
      <div className="z-50 fixed">
        <ResponsiveAppBar
          Username={{
            User: usrData["User"],
            Username: usrData["Username"],
            Id: usrData["Id"],
          }}
        />
      </div>
      <div className="absolute text-center h-screen">
        <div className="font-black num absolute z-10 w-screen">
          <h1 className="">403</h1>
        </div>
        <div className="z-20 relative w-screen txt-lg">
          <h1>
            You don't have permission
            <br /> to access this page
          </h1>
          <a className="btn" href="/">
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}
