import React from "react";
import { Route, Routes } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import UserLogin from "./pages/UserLogin";
import UserLogout from "./pages/UserLogout";
import UserSignup from "./pages/UserSignup";
import CaptainLogin from "./pages/CaptainLogin";
import CaptainLogout from "./pages/CaptainLogout";
import CaptainSignup from "./pages/CaptainSignup";
import CaptainHome from "./pages/CaptainHome";
import UserProtectWrapper from "./pages/UserProtectWrapper";
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/home"
          element={
            <UserProtectWrapper>
              <Home />
            </UserProtectWrapper>
          }
        />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/user/logout" element={<UserProtectWrapper>
          <UserLogout/>
        </UserProtectWrapper>} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain/logout" element={<CaptainProtectWrapper>
          <CaptainLogout/>
        </CaptainProtectWrapper>} />
        <Route path="/captain-home" element={
          <CaptainProtectWrapper>
              <CaptainHome />
            </CaptainProtectWrapper>
        } />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        
      </Routes>
    </div>
  );
};

export default App;
