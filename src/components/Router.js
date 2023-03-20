import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Auth from "../routes/Auth";
import Home from './../routes/Home';

const AppRouter =  ({isLoggendIn}) => {
  return (
      <Routes>
        {isLoggendIn?
        <>
        <Route path="/" element={<Home />}>
        </Route>
        </>
        :
        
        <Route path="/" element={<Auth />} />}
      </Routes>
  );
};

export default AppRouter
