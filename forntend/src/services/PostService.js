import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/post";

const createPost = async (title, description, imageFile) => {
    try {
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
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

const getAllPosts = async() =>{
  const response = await axios.get( `${BASE_URL}/allposts`);
  console.log(response)
  return response;

}

export default {createPost , getAllPosts};
