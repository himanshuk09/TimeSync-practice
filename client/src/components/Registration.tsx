import React from 'react'
import { Link } from 'react-router-dom';
const Registration:React.FC = () => {
    return (
        
            <div className="wrapper">
                <h1>Welcome to Timesync</h1>
                {/* <p>Welcome back you've <br /> been missed!</p> */}
                <form>
                    <input type="text" placeholder="Enter Full Name" />
                    <input type="email" placeholder="Enter Email Address" />
                    <input type="text" placeholder="Enter username" />
                    <input type="password" placeholder="Set Password" />
                </form>
                <button>Sign up</button>
                <p className="or">
                    ----- or continue with -----
                </p>
                <div className="icons">
                    <i className="fab fa-google"></i>
                    <i className="fab fa-github"></i>
                    <i className="fab fa-facebook"></i>
                </div>
                <div className="not-member">
                    already a member? <Link to="/">Login</Link>
                </div>
            </div>
        
    )
}
export default Registration;