import { useEffect, useState } from 'react';
import { config } from '../config/config';
import spotify from '../assets/images/spotify.png';

function Home(){
    const [userStatus, setUserStatus] = useState([]);
    const [isUserStatusLoaded, setIsUserStatusLoaded] = useState(false);

    useEffect(() =>{
        fetch(`https://api.lanyard.rest/v1/users/${config.api.lanyard.discordUserId}`).then(response => response.json()).then(response =>{
            setUserStatus(response);
            console.log(response);
            console.log(`Connected To Lanyard API : SUCCESS : ${Math.random()}`);

            // update loading state
            setTimeout(() =>setIsUserStatusLoaded(true), 2000);
        });
    });
    
    
    return(
        <>
            <div className="hero glass my-10 rounded-2xl text-start text-black">
                <div className="hero-content w-full">
                    <div className="py-5 md:px-10 w-full">
                        <h1 className="text-lg font-bold"><i className="fa-solid fa-code"></i> | {"Dev. Stacks"}</h1>
                        <ul>
                            <li className="py-2 text-sm font-thin">▪ Programming languages: JavaScript, HTML, CSS, SQL, JSX, Python, C++, EJS</li>
                            <li className="py-2 text-sm font-thin">▪ Frameworks: Express.js, React.js, Node.js, Discord.js, Bootstrap, TailwindCSS</li>
                            <li className="py-2 text-sm font-thin">▪ Tools: Git, Postman, Docker, SourceTree, Filezilla, Plesk, Figma</li>
                            <li className="py-2 text-sm font-thin">▪ IDEs: Visual Studio Code</li>
                            <li className="py-2 text-sm font-thin">▪ Etc: null</li>
                        </ul>

                        <h1 className="text-lg mt-5 font-bold">🥰 | {"Personal Information"}</h1>
                        <ul>
                            <li className="py-2 text-sm font-thin">▪ Live in : Samut Prakan, Thailand</li>
                            <li className="py-2 text-sm font-thin">▪ Studying At : King Mongkut's University of Technology Thonburi (KMUTT) (Bangmod)</li>
                            <li className="py-2 text-sm font-thin">▪ Faculty : Faculty of Engineering (VIDVA)</li>
                            <li className="py-2 text-sm font-thin">▪ Department : Computer Engineering (CPE)</li>
                            <li className="py-2 text-sm font-thin">▪ Hobbies: Listening to music, watching anime, coding, sleeping</li>
                            <li className="py-2 text-sm font-thin">▪ Fav Anime : 86, Spy X Family, Bloom into You, YourName etc.</li>
                        </ul>
                        
                        <h1 className="text-lg mt-5 font-bold"><i className="fa-brands fa-discord"></i> | {"Discord Status"}</h1>

                        {/* Load success and show data */}
                        <div className={`card card-side glass shadow-2xl mt-3 w-80 h-fit px-5 py-1 mx-auto text-center md:w-4/5`}>
                            <figure className='w-40 text-center'>
                                {isUserStatusLoaded ? 
                                    <img src={`https://cdn.discordapp.com/avatars/${config.api.lanyard.discordUserId}/${userStatus.data?.discord_user.avatar}`} className='w-3/3 rounded-full animate__animated animate__fadeIn' alt="profile"/>
                                    :
                                    <span className="loading loading-spinner loading-md"></span>
                                }
                                
                            </figure>

                            <div className="card-body w-full">
                                <h2 className="font-bold text-md md:text-xl">
                                    {isUserStatusLoaded ? 
                                        <span className='animate__animated animate__fadeIn'>@{userStatus.data?.discord_user.username} #{userStatus.data?.discord_user.discriminator}</span> 
                                    :   
                                        <span>&nbsp;</span>
                                    }
                                </h2>
                                <p>
                                    {isUserStatusLoaded ? 
                                        <span className={`animate__animated animate__fadeIn ${userStatus.data?.discord_status === 'online' ? "text-success" : ""}`}>{userStatus.data?.discord_status}</span> 
                                    : 
                                        <span>&nbsp;</span>
                                    }
                                </p>
                                {/* <h2 className={`font-bold text-md ${userStatus.data?.activities.length !== 0 ? "" : "hidden"}`}>Activities</h2>
                                <p>{userStatus.data?.activities.map((activity, i) =>(
                                    <span key={i}>
                                        <span>{activity.name}</span> <br /> 
                                    </span>
                                ))}</p> */}
                            </div>
                        </div>
                    </div>
                </div>
			</div>
        </>
    );
}


export default Home;