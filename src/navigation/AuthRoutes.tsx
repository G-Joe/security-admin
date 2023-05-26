import { Route, Routes } from "react-router-dom";


import SignIn from "pages/Auth/SignIn/SignIn";
import ChangePassword from "pages/Auth/ChangePassword/ChangePassword";
import TwoFactor from "pages/Auth/TwoFactor/TwoFactor";
import GoogleTwoFactor from "pages/Auth/TwoFactor/GoogleAuth";
import MicrosoftTwoFactor from "pages/Auth/TwoFactor/MirosoftAuth";
import GoogleEnterOtp from "pages/Auth/EnterOtp/GoogleOtp";
import MicrosoftEnterOtp from "pages/Auth/EnterOtp/MicrosoftOtp";



const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn/>} />
      <Route path="/login" element={<SignIn />} />
      <Route path="/change-password" element={<ChangePassword/>}/>
      <Route path="/two-factor-authentication" element={<TwoFactor/>}/>
      <Route path="/google-two-factor" element={<GoogleTwoFactor/>}/>
      <Route path="/microsoft-two-factor" element={<MicrosoftTwoFactor/>}/>
      <Route path="/google-otp" element={<GoogleEnterOtp/>}/>
      <Route path="/microsoft-otp" element={<MicrosoftEnterOtp/>}/>
    </Routes>
  );
};

export default AuthRoutes;
