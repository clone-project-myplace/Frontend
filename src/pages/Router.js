import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import Login from "./Login";
import MainPage from "./MainPage";
import Signup from "./Signup";
import Detail from "../pages/Detail";
import Write from './Write';

const Router = () => {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
