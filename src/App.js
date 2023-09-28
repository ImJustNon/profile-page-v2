import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { config } from './config/config'
import Home from './pages/Home';
import Profile from './components/Profile';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import Particle from './components/Particles';

function App() {

  return (
    <>
		<Particle />
		<div className='mt-28 mx-auto w-[30rem] md:w-[45rem] noselect'>
			<Profile />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/project' element={<Project />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
    </>
    
  );
}

export default App;