import axios from "axios";

const API = process.env.REACT_APP_BACKEND_API_URL || process.env.REACT_APP_JSERVER_API_URL;

export const signIn = async (userData) => {
    const { data } = await axios.post(`${API}/signIn/`, {...userData});
    return data;
}