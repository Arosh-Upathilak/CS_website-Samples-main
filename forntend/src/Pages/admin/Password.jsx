import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import "./Password.css";

const Password = ({ value, onChange, placeholder }) => {
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword((prev) => !prev);
    };

    return (
        <div className="password-text">
            <input 
                value={value}
                onChange={onChange}
                type={isShowPassword ? "text" : "password"}
                placeholder={placeholder || "Password"}
                className="input-box"
                style={{
                    border: 'none',            
                    padding: '0 5px',           
                    borderRadius: '4px',     
                    width: '25%',             
                    flexGrow: 1,              
                    marginRight: '10px',     
                    outline: 'none',         
                    background: 's', 
                }}
            />
            {isShowPassword ? (
                <FaRegEyeSlash 
                    size={22} 
                    className="image-input" 
                    onClick={toggleShowPassword} 
                />
            ) : (
                <FaRegEye 
                    size={22} 
                    className="image-input" 
                    onClick={toggleShowPassword} 
                />
            )}
        </div>
    );
};

export default Password;
