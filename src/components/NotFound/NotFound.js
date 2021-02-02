import {useLocation} from "react-router-dom";

const NotFound = (props) =>{
    let location = useLocation();

    return(
        <div style={{textAlign:"center"}}>
            <h1>404 - Not Found...</h1>
            <h4>{location.pathname}</h4>
        </div>
    );
}

export default NotFound;