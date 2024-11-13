import axios from "axios";

const BASE_URL = "http://localhost:8080/api/v1/auth";

const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      email,
      password,
    });
    console.log("User logged in successfully:", response);
   
    return response;
  } catch (error) {
    console.log("Error while logging in user:", error.message);
    return { error: error.message };
  }
};

export default loginUser;
