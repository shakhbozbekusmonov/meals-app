import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
            <div className='text-center'>
                <h1>
                    404 <b>Error</b> not found
                </h1>
                <Link to='/'>Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
