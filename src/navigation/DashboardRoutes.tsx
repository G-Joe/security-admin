import { Route, Routes } from "react-router-dom";
import Home from "pages/Dashboard/Home/Home";
import OxygenAdmin from "pages/Dashboard/AdminsUser/AdminUser";
import Requests from "pages/Dashboard/Requests/Requests";
import AuditTrail from "pages/Dashboard/AuditTrail/AuditTrail";


import Notification from "pages/Dashboard/Home/Notification";
import Profile from "pages/Dashboard/Home/Profile/Profile";





const DashboardRoutes = () => {
  return (
    <div className="main-fit">
      <Routes>
        <Route path="/dashboard/home" element={<Home />} />
        <Route path="/dashboard/oxygen-admin" element={<OxygenAdmin/>}/>
        <Route path="/dashboard/requests" element={<Requests/>}/>
        <Route path="/dashboard/audit-trail" element={<AuditTrail/>}/>


        <Route path="/dashboard/home/notification" element={<Notification/>}/>
        <Route path="/dashboard/home/profile" element={<Profile/>}/>

      </Routes>
    </div>
  );
};

export default DashboardRoutes;
