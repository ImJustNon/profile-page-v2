import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, redirect } from "react-router-dom";
import { useEffect, useState, useCallback } from 'react';
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
import { pageTitleChoices } from "./utilities/pageTitleChoices";
import { wait } from './utilities/wait';

function App() {
	const { pathname } = useLocation();
	const [enableParticlesState, setEnableParticlesState] = useState(false);

	useEffect(() =>{
		document.title = pageTitleChoices(pathname);
	}, [pathname]);

	useEffect(() =>{
		document.addEventListener('visibilitychange', () =>{
			const visibilityState = document.visibilityState;
			if(visibilityState === "visible"){
				document.title = "o(*^▽^*)┛ Welcome Back! ";
				setTimeout(() =>{
					document.title = pageTitleChoices(window.location.pathname);
				}, 2 * 1000);
			}
			else {
				document.title = `(っ °Д °;)っ Noooooo!`;
			}
		});
	}, []);
	
	// load data from localstorage and then set to state
	useEffect(() =>{
		const enableParticles = localStorage.getItem("enable_particles");
		if(enableParticles !== null) setEnableParticlesState(enableParticles === "true" ? true : false);
		else setEnableParticlesState(true);
	}, []);


	return (
		<>	
			{!enableParticlesState ? <></> : <Particle />} {/* not load Particles js if in mobile device <it take resource too much :) > */}

			{/* <SettingPageButton /> */}
			<div className='container mx-auto'>
				<div className='mt-24 mx-auto w-96 md:w-[45rem] noselect'>
					<Profile />
					<AnimatePresence wait>
						<motion.div 
							key={pathname}
							initial="initialState"
							animate="animateState"
							exit="exitState"
							transition={{
								duration: 0.6,
							}}
							variants={{
								initialState: {
									filter: "blur(8px)",
									opacity: 0,
									scale: 1,
									borderRadius: 0,
									boxShadow: "0 0 0 rgba(0,0,0,0)",
									backdropFilter: "blur(0px)",
									WebkitBackdropFilter: "blur(0px)",
									willChange: "filter, opacity, transform",
								},
								animateState: {
									filter: "blur(0px)",
									opacity: 1,
									scale: 1,
									borderRadius: 15,
									boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
									backdropFilter: "blur(20px)",
									WebkitBackdropFilter: "blur(20px)",
								},
								// exitState: {
								// 	filter: "blur(12px)",
								// 	opacity: 0,
								// },
							}}
						>
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/project' element={<Project />} />
								<Route path='/social' element={<Socials />} />
								<Route path='/setting' element={<Setting setEnableParticlesState={setEnableParticlesState} />} />
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