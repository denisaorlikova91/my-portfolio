import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Contact from './Components/Contact';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import Blog from './Components/Blog';
import CurrentProjects from './Components/CurrentProjects';
import WorkExperience from './Components/WorkExperience';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <div className="container"> 
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/currentprojects" element={<CurrentProjects />} />
            <Route path="/workexperience" element={<WorkExperience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
  </React.Fragment>

  );
}

export default App;
