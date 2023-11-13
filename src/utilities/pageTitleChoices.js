export const pageTitleChoices = (path) =>{
    let title = "";
    if(path === "/"){
        title = `Not._Non | Home`;
    }
    else if(path === "/project"){
        title = `Not._Non | Project`;
    }
    else if(path === "/social"){
        title = `Not._Non | Social`;
    }
    else if(path === "/setting"){
        title = `Not._Non | Setting`;
    }
    else{
        title = `Not._Non | 404 NotFound`;
    }
	return title;
}