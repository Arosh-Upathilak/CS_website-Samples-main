import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/post";

export const createPost = async (title, description, imageFile , formattedDate ,link) => {
    try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("eventdate", formattedDate);
        formData.append("link" , link)
        formData.append("image", imageFile);

        const response = await axios.post(`${BASE_URL}/createpost`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error uploading post:", error);
        return { error: error.message };
    }
};

export const getAllPosts = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/allposts`);
      return response.data; 
    } catch (error) {
      console.error("Error fetching posts:", error);
      return { error: error.message }; 
    }
  };

  
  export const deletePost = async (postId) => {
    try {
      await axios.delete(`${BASE_URL}/deletepost/${postId}`);
      return { success: true };
    } catch (error) {
      console.error("Error deleting post:", error);
      return { error: error.message };
    }
  };
    


