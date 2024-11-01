import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Admin.css";
import LogoWhite from '../../assests/images/CS_white.png';
import PasswordInput from "./Password";
import loginUser from "../../services/loginService";

const Admin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();  // Initialize navigate

    const handleLogin = async () => {
        const response = await loginUser(email, password);
        if (response.status === 200) {
        
            navigate('/admin/postUpload');
        } else if (response.error) {
            setError(response.error);
        } else {
            console.log("Login successful:", response);
        }
    };

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
                {error && <p className="error-message">{error}</p>}
                <button className="login-button" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default Admin;
