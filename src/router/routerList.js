import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from '../components/home';
import MainLayout from '../layouts/mainLayout';
import Login from '../components/login';

const RouterList = () => {
  return (
    <Routes>
      {/* <Route element={<MainLayout></MainLayout>}>
          <Route path="/" element={<Home></Home>}/>
      </Route> */}
      <Route element={<MainLayout></MainLayout>}>
        <Route path="/" element={<Login/>}/>
      </Route>
    </Routes>
  )
}

export default RouterList