export const pageTitleChoices = (path) =>{
    let title = "";
    if(path === "/"){
        title = `NOr._Nor | Home`;
    }
    else if(path === "/project"){
        title = `NOr._Nor | Project`;
    }
    else if(path === "/social"){
        title = `NOr._Nor | Social`;
    }
    else if(path === "/setting"){
        title = `NOr._Nor | Setting`;
    }
    else{
        title = `NOr._Nor | 404 NotFound`;
    }
	return title;
}