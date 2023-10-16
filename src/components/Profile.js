import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { config } from "../config/config";

function Profile(){
	const { pathname } = useLocation();

	const [path, setPath] = useState("");
	const [githubProfileURL, setGithubProfileURL] = useState("");
	const [githubInfo, setGithubInfo] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() =>{
		setPath(pathname);

		switch(pathname){
			case "/":
				document.title = `Not._Non | Home`;
			break;
			case "/project":
				document.title = `Not._Non | Project`;
			break;
			case "/social":
				document.title = `Not._Non | Social`;
			break;
		}
	}, [pathname]);

	useEffect(() =>{
		fetch(`https://api.github.com/users/${config.api.github.username}`).then(response => response.json()).then(response =>{
			setGithubProfileURL(response.avatar_url);
			setGithubInfo(response);
			setTimeout(() => setIsLoaded(true), 1500);
		});
	}, []);

    return(
		<>
			<div className="hero glass rounded-2xl text-center md:text-start text-black">
				<div className="hero-content flex-col md:flex-row">
					{isLoaded ? 
						<div className="h-80 w-2/3 md:h-auto">
							<img src={githubProfileURL} className="w-full rounded-lg shadow-2xl animate__animated animate__fadeIn" />
						</div>
						:
						<div className="h-80 w-2/3 text-center md:h-auto">
							<span className="loading loading-spinner loading-lg"></span>
						</div>
					}
					<div>
						<h1 className="text-2xl font-bold"><a href="https://github.com/ImJustNon" target="_blank">{"< Not._Non />"}</a></h1>
						<p className="py-3">I call myself a Dev. But I hate code. LOL.</p>
						<p className="py-3">Currently studying at the Vocational Certificate at the Science-Based Technology Vocational College (Chonburi). Information Technology branch.</p>
						<div className="text-center font-bold">
							<Link to={"/"}    className={path === "/" ? "mr-1 btn btn-ghost btn-active" : "mr-1 btn btn-ghost"}><i className="fa-solid fa-house"></i> /Home</Link>
							<Link to={"/project"} className={path === "/project" ? "mr-1 btn btn-ghost btn-active" : "mr-1 btn btn-ghost"}><i className="fa-solid fa-code"></i> /Project</Link>
							<Link to={"/social"}  className={path === "/social" ? "mr-1 btn btn-ghost btn-active" : "mr-1 btn btn-ghost"}><i className="fa-solid fa-share-from-square"></i> /Social</Link>
							<Link to={"/setting"}  className={path === "/setting" ? "mr-1 btn btn-ghost btn-active" : "mr-1 btn btn-ghost"}><i className="fa-solid fa-gear "></i></Link>
						</div>
					</div>
				</div>
			</div>
		</>
    );
}


export default Profile;