import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { config } from '../config/config';

function Project(){
    const [searchParams, setSearchParams] = useSearchParams();

    const p = searchParams.get('p') && !isNaN(searchParams.get('p')) ? searchParams.get('p') : "0";

    const group = config.data.pages.project.group;

    const [projects, setProjects] = useState([]);
    const [isProjectDataLoading, setIsProjectDataLoading] = useState(true);

    useEffect(() =>{
        setIsProjectDataLoading(true);
        fetch(`https://me.nonlnwza.xyz/api/get/projects?key=${config.api.nonlnwzaPortfolio.key}&filter=${group[parseInt(p)]}`).then(response => response.json()).then(response =>{
            if(response.status === "SUCCESS"){
                console.log(response.data);
                setProjects(response.data);
                console.log(`Connected To Nonlnwza Portfolio API : SUCCESS : ${Math.random()}`);

                // update loading state
                setTimeout(() => setIsProjectDataLoading(false), 500);
            }
        }).catch(e => console.log(e));
    }, [p]);


    return(
        <>
            <div className="hero glass my-10 w-full rounded-2xl text-center text-black">
                <div className="hero-content w-full">
                    <div className="py-2 px-2 w-full">
                        <h1 className='text-2xl text-center mb-5'>{"<My Personal Projects />"}</h1>
                        <hr className='my-5'/>
                        <div className="join grid grid-cols-3 mb-10">
                            <Link to={`/project?p=${parseInt(p) - 1}`} className={`join-item btn btn-outline text-black ${parseInt(p) <= 0 ? "btn-disabled" : ""}`}><i className="fa-solid fa-angles-left"></i></Link>
                            <button className="join-item btn btn-outline text-black">{group[parseInt(p)]}</button>
                            <Link to={`/project?p=${parseInt(p) + 1}`} className={`join-item btn btn-outline text-black ${parseInt(p) === group.length - 1 ? "btn-disabled" : ""}`}><i className="fa-solid fa-angles-right"></i></Link>
                        </div>

                        <div className={`${isProjectDataLoading ? "hidden" : ""}`}>
                            <div className='mx-auto w-full grid grid-cols-1 gap-2 md:grid-cols-2'>

                                {projects.map((project, i) =>(
                                    <div className="card w-fit glass mb-5 shadow-2xl mx-auto" key={i}>
                                        <figure className="px-10 pt-10">
                                            <img src={project.api.img} alt={`project_image_${i}`} className="rounded-xl" />
                                        </figure>
                                        <div className="card-body items-center text-center">
                                            <h2 className="card-title">{project.title.join("")}</h2>
                                            <p>{project.description.join("")}</p>
                                            <div className="card-actions mt-3">
                                                {project.button.map((button, i) =>(
                                                    <a className="btn btn-neutral font-normal text-white" href={button.url} target='_blank' key={i}><i className="fa-brands fa-github"></i> {button.name}</a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                        <div className={`${isProjectDataLoading ? "" : "hidden"} mt-16`}>
                            <span className="mx-auto loading loading-dots loading-lg"></span>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default Project;