import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { config } from "../config/config";

function Profile(){
	const { pathname } = useLocation();

	const [githubProfileURL, setGithubProfileURL] = useState("");
	const [githubProfileUserName, setGithubProfileUserName] = useState("");
	const [githubInfo, setGithubInfo] = useState({});
	const [isLoaded, setIsLoaded] = useState(false);


	useEffect(() =>{
		fetch(`https://api.github.com/users/${config.api.github.username}`).then(response => response.json()).then(response =>{
			setGithubProfileURL(response.avatar_url);
			setGithubProfileUserName(response.name);
			setGithubInfo(response);
			setTimeout(() => setIsLoaded(true), 1500);
		});
	}, []);

    return(
		<>
			<div className="hero glass rounded-2xl text-center md:text-start text-black">
				<div className="hero-content p-3 w-full flex-col md:flex-row">
					{isLoaded ? 
						<div className="h-fit w-2/3 md:h-auto">
							<img src={githubProfileURL} className="w-full rounded-lg shadow-2xl animate__animated animate__fadeIn" />
						</div>
						:
						<div className="h-fit w-2/3 text-center flex justify-center md:h-auto">
							<span className="loading loading-spinner loading-lg"></span>
						</div>
					}
					<div className="w-full md:w-auto">
						<h1 className={`text-2xl font-semibold `}>
							{isLoaded ? 
								<a className="animate__animated animate__fadeIn" href="https://github.com/ImJustNon" target="_blank">{`< ${githubProfileUserName} />`}</a>
								: 
								<div className="text-center md:w-44">
									<span className="loading loading-spinner loading-md"></span>
								</div>
							}
						</h1>
						<p className="py-3">I call myself a Dev. But I hate code. LOL.</p>
						<p className="py-3">Currently studying at the Vocational Certificate at the Science-Based Technology Vocational College (Chonburi). Information Technology branch.</p>
						<div className="text-center font-bold">
							<Link to={"/"} className={pathname === "/" ? "mr-1 btn btn-ghost btn-md btn-active" : "mr-1 btn btn-ghost btn-md"}><i className="fa-solid fa-house"></i> /Home</Link>
							<Link to={"/project"} className={pathname === "/project" ? "mr-1 btn btn-ghost btn-md btn-active" : "mr-1 btn btn-ghost btn-md"}><i className="fa-solid fa-code"></i> /Project</Link>
							<Link to={"/social"} className={pathname === "/social" ? "mr-1 btn btn-ghost btn-md btn-active" : "mr-1 btn btn-ghost btn-md"}><i className="fa-solid fa-share-from-square"></i> /Social</Link>
							<Link to={"/setting"} className={pathname === "/setting" ? "mr-1 btn btn-ghost btn-md btn-active" : "mr-1 btn btn-ghost btn-md"}><i className="fa-solid fa-gear "></i></Link>
						</div>
					</div>
				</div>
			</div>
		</>
    );
}


export default Profile;