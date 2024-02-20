import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Login: React.FC = () => {
    const navigate = useNavigate();
    return (
            <div className="wrapper">
                <h1>Timesync </h1>
                <p>Hello Again!</p>
                <form>
                    <input type="text" placeholder="Enter username" />
                    <input type="password" placeholder="Password" />
                    <p className="recover">
                        <a href="#">Recover Password</a>
                    </p>
                </form>
                <button onClick={() => navigate('/dashboard') }>Sign in</button>
                <p className="or">
                    ----- or continue with -----
                </p>
                <div className="icons">
                    <i className="fab fa-google"></i>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-facebook"></i>
                </div>
                <div className="not-member">
                    Not a member? <Link to="/register">Register Now</Link>
                </div>
            </div>
        
    )
}

export default Login