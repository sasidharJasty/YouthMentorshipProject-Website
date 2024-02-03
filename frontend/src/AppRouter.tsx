import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Logout from "./Pages/Logout";
import Home from "./Pages/homePage";
import Hours from "./Pages/hours";
import Page_Not_Found from "./Pages/Page_Not_Found";
import UnAuthorized from "./Pages/UnAuthorized";
import Forgot from "./Pages/forgot";
import Reset from "./Pages/reset";
import Soon from "./Pages/soon";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Home />} />
        <Route path="/soon" element={<Soon />} />
        <Route path="/hours" element={<Hours />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/reset-password" element={<Reset />} />
        <Route path="*" element={<Page_Not_Found />} />
        <Route path="/UnAuth" element={<UnAuthorized />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
