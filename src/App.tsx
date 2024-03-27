import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import CssBaseline from '@mui/material/CssBaseline/CssBaseline';
import Blog from './Components/Blog';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <BrowserRouter>
        <div className="container"> 
          <Header />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/projects" element={<Projects />} />
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
