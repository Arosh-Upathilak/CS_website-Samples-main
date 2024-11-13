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
    const [showDialog, setShowDialog] = useState(false);  
    const navigate = useNavigate();

    const handleLogin = async () => {
        const response = await loginUser(email, password);
        if (response.status === 200) {
            navigate('/admin/postUpload');
        } else if (response.error) {
            setError(response.error);
            setShowDialog(true);  
        } else {
            console.log("Login successful:", response);
        }
    };

    const closeDialog = () => {
        setShowDialog(false);
        setError(null); 
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
                <button className="login-button" onClick={handleLogin}>Login</button>
            </div>

            {/* Error Dialog */}
            {showDialog && (
                <div className="dialog-overlay">
                    <div className="dialog-box">
                        <p className="error-message">{error}</p>
                        <button className="dialog-close-button" onClick={closeDialog}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Admin;
