import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import { useEffect, useState } from 'react';
import { config } from './config/config';
import Home from './pages/Home';
import Profile from './components/Profile';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import Particle from './components/Particles';
import Footer from './components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { Link, useLocation } from "react-router-dom";
import Socials from './pages/Social';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';
import SettingPageButton from './components/SettingPageButton';
import Setting from './pages/Setting';

function App() {
	const { pathname } = useLocation();
	const [enableParticles, setEnableParticles] = useState(false);

	useEffect(() =>{
		const enableParticles = localStorage.getItem("enable_particles");
		setEnableParticles(enableParticles === "true" ? true : false);
	}, []);

	return (
		<>	
			{!enableParticles ? <></> : <Particle />} {/* not load Particles js if in mobile device <it take resource too much :) > */}

			<SettingPageButton />
			<div className='container mx-auto'>
				<div className='mt-14 mx-auto w-[30rem] md:w-[45rem] noselect'>
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
								<Route path='/social' element={<Socials />} />
								<Route path='/setting' element={<Setting />} />
								<Route path='*' element={<NotFound />} />
							</Routes>
							<Footer />
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</>
	);
}

export default App;