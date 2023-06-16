import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavPane from './components/NavPane';
import Main from './pages/Main/Main';
import BlogList from './pages/BlogList/BlogList';
import Publish from './pages/PublishBlog/Publish';
import Logout from './pages/Logout/Logout';


import "./Dashboard.css"


function Dashboard() {
  

  return (
    <>
      
      
      <BrowserRouter>
        <NavPane>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Dashboard/home" element={<Main />} />
            <Route path="/Dashboard/bloglist" element={<BlogList />} />
            <Route path="/Dashboard/publish" element={<Publish />} />
            <Route path="/Dashboard/logout" element={<Logout />} />
          </Routes>
        
        </NavPane>
      </BrowserRouter>
    </>
  );
}

export default Dashboard;
