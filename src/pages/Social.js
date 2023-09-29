
import { useState } from 'react';
import { config } from '../config/config';

function Socials(){

    const [isActive, setIsActive] = useState({
        num: false,
    });

    function onMouseEnterButton(className, num){
        setIsActive({
            num: String(num),
            class: className,
        });
    }
    function onMouseLeaveButton(className, num){
        setIsActive({
            num: false,
        });
    }

    return(
        <div className="hero glass my-10 rounded-2xl text-center text-black">
            <div className="hero-content">
                <div className="py-2 px-2">
                    <h1 className='text-2xl text-start mb-5'>My Social Accounts</h1>
                    <hr className='my-5'/>
                    {config.data.pages.social.buttons.map((data, i) =>(
                        <a 
                            key={i}
                            href={data.url}
                            target={"_blank"}
                            onMouseEnter={() => onMouseEnterButton(data.hoverClass, i)} 
                            onMouseLeave={() => onMouseLeaveButton(config.data.pages.social.defaultClass, i)} 
                            className={isActive && isActive.num === String(i) ? data.hoverClass : config.data.pages.social.defaultClass}>
                                <i className={data.iconClass}></i> {data.name}
                        </a>
                    ))}
                </div>
            </div>
		</div>      
    );
}


export default Socials;