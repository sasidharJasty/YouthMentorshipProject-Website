import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Logout from "./Logout";
import Home from "./homePage";
import Hours from "./hours";
import Page_Not_Found from "./Page_Not_Found";
import UnAuthorized from "./UnAuthorized";
import Forgot from "./forgot";
import Reset from "./reset";
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Home />} />
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
