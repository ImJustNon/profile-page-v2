import { Link } from "react-router-dom";



function Profile(){
    return(
		<>
			<div className="hero glass rounded-2xl text-center md:text-start ">
				<div className="hero-content flex-col md:flex-row">
					<img src="https://avatars.githubusercontent.com/u/79706975?s=400&u=c00c412332196dfd5ba8075cb149d2d01c0e1fda&v=4" className="w-1/3 rounded-lg shadow-2xl" />
					<div>
						<h1 className="text-2xl font-bold"><a href="https://github.com/ImJustNon" target="_blank">{"< Not._Non />"}</a></h1>
						<p className="py-3">I call myself a Dev. But I hate code. LOL.</p>
						<p className="py-3">Currently studying at the Vocational Certificate at the Science-Based Technology Vocational College (Chonburi). Information Technology branch.</p>
						<div className="text-center font-bold">
							<Link to={"/"} className="btn btn-ghost"><i className="fa-solid fa-house"></i> /Home</Link>
							<Link to={"/project"} className="btn btn-ghost"><i className="fa-solid fa-code"></i> /Project</Link>
							<Link to={"/social"} className="btn btn-ghost"><i className="fa-solid fa-share-from-square"></i> /Social</Link>
						</div>
					</div>
				</div>
			</div>
		</>
    );
}


export default Profile;