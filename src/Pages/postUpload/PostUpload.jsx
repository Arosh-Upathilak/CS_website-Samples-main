import React, { useState, useRef } from "react"; 
import ReactQuill from "react-quill"; 
import "react-quill/dist/quill.snow.css"; 
import "./postUpload.css";

const PostUpload = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null); 

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    const handleImageRemove = () => {
        setImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = ""; 
        }
    };
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, false] }], 
            ['bold', 'italic', 'underline'], 
            ['link', 'image'], 
            ['clean'], 
        ],
    };

    return (
        <div className="postUpload_mainContainer">
            <div className="postUpload_container">
                <h1>Post Upload</h1>
                <div className="postUpload">
                    <input
                        type="text"
                        placeholder="Post Title"
                        className="input-box"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <ReactQuill
                        value={description}
                        onChange={setDescription}
                        placeholder="Post Description:"
                        modules={modules} 
                        className="textarea-box"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="file-input"
                        ref={fileInputRef} 
                    />
                    {image && (
                        <div className="image-preview-container">
                            <img src={image} alt="Preview" className="image-preview" />
                            <button onClick={handleImageRemove} className="remove-image-btn">
                                Remove Image
                            </button>
                        </div>
                    )}
                    <button className="login-button">Login</button>
                </div>
            </div>
        </div>
    );
};

export default PostUpload;
