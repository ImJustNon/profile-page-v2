import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function SettingPageButton(){
    const { pathname } = useLocation();

    const [isSettingButtonActive, setIsSettingButtonActive] = useState(false);

    useEffect(() =>{
        if(pathname === "/setting"){
            setIsSettingButtonActive(true);
        }
        else setIsSettingButtonActive(false);
    }, [pathname]);

    return(
        <div style={{}} className="text-end m-1">
            <Link to={"/setting"} className={`btn btn-ghost ${isSettingButtonActive ? "btn-active" : ""}`}><i className="fa-solid fa-gear fa-2xl"></i></Link>
        </div>
    );
}

export default SettingPageButton;