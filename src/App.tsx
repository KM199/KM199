import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Litepaper from './pages/litepaper';
import ContactElement from './pages/contact';
import FeaturesPage from './pages/features';
import CreateTutorial from './pages/create-tutorial';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<FeaturesPage />} />
        <Route path='/contact' element={<ContactElement />} />
        <Route path='/litepaper' element={<Litepaper />} />
        <Route path='/create-tutorial' element={<CreateTutorial />} />
      </Routes>
    </Router>
  );
}

export default App;
