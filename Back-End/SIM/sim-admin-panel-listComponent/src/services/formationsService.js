import axios from "axios";

const API = process.env.REACT_APP_BACKEND_API_URL || process.env.REACT_APP_JSERVER_API_URL;

export const getFormations = async () => {
    const { data } = await axios.get(`${API}/formations`);
    return data;
}

export const updateFormation = async (formationInfo) => {
    const { data } = await axios.put(`${API}/formations/${formationInfo.id}`, {...formationInfo});
    return data;
}

export const deleteFormation = async (formationId) => {
    const { data } = await axios.delete(`${API}/formations/${formationId}`);
    return data;
}

export const createFormation = async (formationData) => {
    const { data } = await axios.post(`${API}/formations/`, {...formationData});
    return data;
}