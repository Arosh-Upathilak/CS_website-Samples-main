import React, { useEffect, useState } from "react";
import { getAllPosts } from "../../services/PostService"; // Importing API functions

const PostsDisplay = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    const fetchPosts = async () => {
        const data = await getAllPosts();
        console.log("posts : " , data)
        if (data.error) {
            setError(data.error);
        } else {
            setPosts(data);
        }
    };

    // Fetch all posts on component mount
    useEffect(() => {
        
        fetchPosts();
       
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {error && <p>Error: {error}</p>}
            {posts.map((post) => (
                <div key={post.id} style={{ border: "1px solid #ccc", padding: "1em", margin: "1em 0" }}>
                    <h2>{post.title}</h2>
                    <p dangerouslySetInnerHTML={{ __html: post.description }} />
                    {post.imageData && (
                        <img 
                            src={`data:image/jpeg;base64,${post.imageData}`} 
                            alt={post.title} 
                            style={{ width: "200px", height: "auto" }}
                        />
                    )}
                    <p>Link: {post.link ? <a href={post.link} target="_blank" rel="noopener noreferrer">{post.link}</a> : "No link"}</p>
                    <p>Category: {post.category}</p>
                </div>
            ))}
        </div>
    );
};

export default PostsDisplay;
