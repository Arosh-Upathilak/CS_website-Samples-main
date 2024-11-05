import React, { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "react-datepicker/dist/react-datepicker.css"; 
import ReactDatePicker from "react-datepicker";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 
import "./postUpload.css";
import { createPost } from "../../services/PostService";
import ErrorModal from '../Error/ErrorModal'; 

const PostUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [date, setDate] = useState(new Date()); 
  const [message, setMessage] = useState(""); 
  const [error, setError] = useState(""); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const fileInputRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleImageRemove = () => {
    setImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatDateForUpload = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const day = String(date.getDate()).padStart(2, '0'); 
    return `${year}-${month}-${day}`; 
  };

  const handleUpload = async () => {
    setError(""); 
    setMessage(""); // Clear any previous messages
    const formattedDate = formatDateForUpload(date); 
    const response = await createPost(title, description, image, formattedDate); 

    if (response.error) {
      console.error("Error uploading post:", response.error);
      setError(response.error); 
      setIsModalOpen(true); 
    } else {
      console.log("Post uploaded successfully:", response);
      setMessage("Post uploaded successfully!"); // Set success message
      setIsModalOpen(true); // Open modal for success message
    }
    clearFields();
  };

  const clearFields = () => {
    setTitle("");
    setDescription("");
    setImage(null);
    setDate(new Date());
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; 
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
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
      <div className="post_container">
        <Link to="/admin/postView"><div className="text">Post View</div></Link>
      </div>
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
          <div className="date-picker-container">
            <label>Select Date:</label>
            <ReactDatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              className="date-picker-input"
              renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button onClick={decreaseMonth} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                    <FaChevronLeft size={20} color="black" />
                  </button>
                  <span style={{ fontSize: '1.5em', fontWeight: 'bold' }}>
                    {date.toLocaleString('default', { month: 'long' })} {date.getFullYear()}
                  </span>
                  <button onClick={increaseMonth} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>
                    <FaChevronRight size={20} color="black" />
                  </button>
                </div>
              )}
            />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="file-input"
            ref={fileInputRef}
          />
          {image && (
            <div className="image-preview-container">
              <img src={URL.createObjectURL(image)} alt="Preview" className="image-preview" />
              <button onClick={handleImageRemove} className="remove-image-btn">
                Remove Image
              </button>
            </div>
          )}
          <button className="login-button" onClick={handleUpload}>Upload Post</button>
        </div>
      </div>
      {isModalOpen && <ErrorModal message={error || message} onClose={handleCloseModal} />} {/* Show either error or success message */}
    </div>
  );
};

export default PostUpload;
