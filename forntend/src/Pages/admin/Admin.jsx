import React , { useState }  from "react";
import "./Admin.css";
import LogoWhite from '../../assests/images/CS_white.png';
//import { validateEmail } from "../utils/validations";
import PasswordInput from "./Password";
//import { Link } from "react-router-dom";

const Admin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (

        <div className="admin_mainContainer">
            <div className="text_container">
                <img src={LogoWhite} className='logo_01' alt='logo' style={{ width: '300px', height: '120px' }} />
            </div>
            <div className="credentials">
                <input
                            type="text"
                            placeholder="Email"
                            className="input-box"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            
                        />
                        <PasswordInput
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='password-input'
                        />
                        <button className="login-button">Login</button>
            </div>
        </div>
    );
    };

export default Admin;