import { useEffect, useState } from "react";


function Setting(props){
    // set get value from localstorage
    const [defaultParticlesValue, setDefaultParticlesValue] = useState(null);

    useEffect(() => {
        const enableParticles = localStorage.getItem("enable_particles");
        
        setTimeout(() =>{
            setDefaultParticlesValue(enableParticles === "true" ? true : false);
        }, 250);
    }, []);

    function handleSwitch(option, value){
        if(option === "particles"){
            localStorage.setItem("enable_particles", value);
            props.setEnableParticlesState(value);
        }
    }

    return(
        <>
            <div className="hero glass mt-10 rounded-2xl text-center text-black">
                <div className="hero-content">
                    <div className="py-5">
                        <h1 className='text-2xl text-center mb-5'>{"<Settings />"}</h1>
                        <hr className='my-5'/>
                        
                        <div className="card w-96 glass text-black">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Enable Particles Background</h2>
                                <div className="card-actions justify-end">
                                    <input type="checkbox" defaultChecked={defaultParticlesValue} onClick={(event) => handleSwitch("particles", event.target.checked)} className="toggle toggle-success toggle-lg"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>      
        </>
    );
}

export default Setting;