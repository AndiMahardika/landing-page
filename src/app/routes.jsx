import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Landingpage from "../pages/LandingPage.jsx";
import AboutUs from "../pages/AbutUs.jsx";
import ErrorPage from "../pages/404.jsx";

export default function RouterApp(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}