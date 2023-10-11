import { useEffect } from "react";


function NotFound(){

    useEffect(() =>{
        // document.title = "Not.Non | 404 NotFound"
    }, []);

    return(
        <>
            <div className="hero glass my-10 rounded-2xl text-center text-black">
                <div className="hero-content">
                    <div className="py-5">
                        <h1 className="text-5xl font-bold">404</h1>
                        <p>Error : Page Not Found</p>
                    </div>
                </div>
			</div>
        </>
    );
}

export default NotFound;