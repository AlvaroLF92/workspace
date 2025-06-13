import axios from "axios";

const API = process.env.REACT_APP_BACKEND_API_URL || process.env.REACT_APP_JSERVER_API_URL;

export const getCenters = async () => {
    const { data } = await axios.get(`${API}/centers`);
    return data;
}

export const updateCenter = async (centerInfo) => {
    const { data } = await axios.put(`${API}/centers/${centerInfo.id}`, {...centerInfo});
    return data;
}

export const deleteCenter = async (centerId) => {
    const { data } = await axios.delete(`${API}/centers/${centerId}`);
    return data;
}

export const createCenter = async (centerData) => {
    const { data } = await axios.post(`${API}/centers/`, {...centerData});
    return data;
}