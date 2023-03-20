import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Auth from "../routes/Auth";
import Home from './../routes/Home';
import Navigation from "./Navigation";
import Profile from "./Profile";

const AppRouter =  ({isLoggendIn}) => {
  return (
    <>
        {isLoggendIn && <Navigation />}
      <Routes>
        {isLoggendIn?
        <>
        <Route path="/" element={<Home />}>
        </Route>
        
        <Route path="/profile" element={<Profile />}></Route>
        </>
        :
        
        <Route path="/" element={<Auth />} />}
      </Routes>
    </>
  );
};

export default AppRouter
