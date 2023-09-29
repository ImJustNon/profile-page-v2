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
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from "react-router-dom";

function App() {
	const { pathname } = useLocation();

	return (
		<>
			<Particle />
			<div className='mt-28 mx-auto w-[30rem] md:w-[45rem] noselect'>
				<Profile />
					<AnimatePresence wait>
						<motion.div 
							key={pathname}
							initial="initialState"
							animate="animateState"
							exit="exitState"
							transition={{
								duration: 0.3,
							}}
							variants={{
								initialState: {
									opacity: 0, transform: "translateY(150px)",
								},
								animateState: {
									opacity: 1, transform: 0,
								},
								exitState: {},
							}}
						>
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/project' element={<Project />} />
								<Route path='*' element={<NotFound />} />
							</Routes>
						</motion.div>
					</AnimatePresence>
			</div>
		</>
		
	);
}

export default App;