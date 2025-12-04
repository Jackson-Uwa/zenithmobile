import { useNavigate } from "react-router-dom";

const NotFound = (props) => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>404 || Page not found!</h1>
            <button onClick={() => navigate('/overview')}>Go back to home page</button>
        </div>
    )
}

export default NotFound;