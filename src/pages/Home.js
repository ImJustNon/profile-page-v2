import { useState } from 'react';
import { config } from '../config/config'

function Home(){
    const [userStatus, setUserStatus] = useState([]);

        
    fetch(`https://api.lanyard.rest/v1/users/${config.api.lanyard.discordUserId}`).then(response => response.json()).then(response =>{
        setUserStatus(response);
        console.log(`Connected To Lanyard API : SUCCESS : ${Math.random()}`);
    });
    
    return(
        <>
            <div className="hero glass my-10 rounded-2xl text-start text-black">
                <div className="hero-content">
                    <div className=" py-5">
                        <h1 className="text-lg font-bold"><i className="fa-solid fa-code"></i> | {"Dev. Stacks"}</h1>
                        <ul>
                            <li className="py-2 text-sm font-thin">▪ Programming languages: JavaScript, HTML, CSS, SQL, JSX, Python, C++, EJS</li>
                            <li className="py-2 text-sm font-thin">▪ Frameworks: React.js, Node.js, Discord.js, Bootstrap, TailwindCSS</li>
                            <li className="py-2 text-sm font-thin">▪ Tools: Git</li>
                            <li className="py-2 text-sm font-thin">▪ IDEs: Visual Studio Code</li>
                            <li className="py-2 text-sm font-thin">▪ Etc: null</li>
                        </ul>

                        <h1 className="text-lg mt-5 font-bold">🥰 | {"Personal Information"}</h1>
                        <ul>
                            <li className="py-2 text-sm font-thin">▪ Live in : Samut Prakan, Thailand</li>
                            <li className="py-2 text-sm font-thin">▪ Study At : Science-Based Technology Vocational College (Chonburi)</li>
                            <li className="py-2 text-sm font-thin">▪ Field of Study : Information Technology (IT)</li>
                            <li className="py-2 text-sm font-thin">▪ Hobbies: Listening to music, watching anime, coding, sleeping</li>
                            <li className="py-2 text-sm font-thin">▪ Fav Anime : 86, Spy X Family, Bloom into You, YourName ETC.</li>
                        </ul>
                        
                        <div className="card card-side glass shadow-2xl mt-14 px-3 py-3">
                            <figure><img src={`https://cdn.discordapp.com/avatars/${config.api.lanyard.discordUserId}/${userStatus.data?.discord_user.avatar}`} style={{borderRadius: "100%"}} alt="profile"/></figure>
                            <div className="card-body">
                                <h2 className="card-title">@{userStatus.data?.discord_user.username} #{userStatus.data?.discord_user.discriminator}</h2>
                                <p>Status : <span className={userStatus.data?.discord_status === 'online' ? "text-success" : ""}>{userStatus.data?.discord_status}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
			</div>
        </>
    );
}


export default Home;