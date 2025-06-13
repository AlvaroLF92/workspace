import axios from "axios";

const API = process.env.REACT_APP_BACKEND_API_URL || process.env.REACT_APP_JSERVER_API_URL;

export const getClasses = async () => {
    const { data } = await axios.get(`${API}/classes`);
    return data;
}

export const updateClass = async (classInfo) => {
    const { data } = await axios.put(`${API}/classes/${classInfo.id}`, {...classInfo});
    return data;
}

export const deleteClass = async (classId) => {
    const { data } = await axios.delete(`${API}/classes/${classId}`);
    return data;
}

export const createClass = async (classData) => {
    const { data } = await axios.post(`${API}/classes/`, {...classData});
    return data;
}