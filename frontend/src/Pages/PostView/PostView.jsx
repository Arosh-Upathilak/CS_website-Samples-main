import React, { useEffect, useState } from "react";
import { getAllPosts, deletePost } from "../../services/PostService";
import "./Postview.css";
import { Link } from 'react-router-dom';

const PostView = () => {
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await getAllPosts();
        if (response.error) {
            console.error(response.error);
        } else {
            setPosts(response);
        }
    };

    const handleDelete = async (postId) => {
        const response = await deletePost(postId);
        if (response.error) {
            console.error(response.error);
        } else {
            fetchPosts();
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div className="postview">
            <div className="postUplod">
                <Link to="/admin/postUpload">
                    <div className="text">Post Upload</div>
                </Link>
            </div>
            <div className="postview_container">
                <div className="posts-section">
                    <h1>Post View</h1>
                    {posts.length === 0 ? (
                        <p>No posts available</p>
                    ) : (
                        <ul>
                            {posts.map((post) => (
                                <li key={post.id} className="post-item">
                                    <h2>Topic: {post.title}</h2>
                                    <p>Description: {post.description.replace(/<\/?p>/g, '')}</p>
                                    <p>Event Date: {post.eventDate}</p>
                                    <Link to={post.link}>{post.link}</Link>
                                    {post.imageId && (
                                        <img
                                            src={`data:image/jpeg;base64,${post.imageData}`}
                                            alt={post.title}
                                            style={{ width: "200px", height: "auto" }}
                                            className="post-image"
                                        />
                                    )}
                                    <div className="btn">
                                        <button
                                            onClick={() => handleDelete(post.id)}
                                            className="edit-button"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(post.postID)}
                                            className="delete-button"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PostView;
