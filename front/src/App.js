import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Discovery from './components/Discovery/Discovery';
import SidebarLayout from "./components/SidebarLayout/SidebarLayout";
import ProfileUser from "./components/ProfileUser/ProfileUser";

const App = () => {

  return (
      <BrowserRouter>
        <div className='tikfans-app'>
          <Navbar />
          <div className='content container'>
            <Routes>
              <Route element={<SidebarLayout />} >
                <Route path='/' exact element={<Discovery />} />
                <Route path='/profile_user/:id' exact element={<ProfileUser />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
