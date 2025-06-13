import axios from "axios";

const API = process.env.REACT_APP_BACKEND_API_URL || process.env.REACT_APP_JSERVER_API_URL;

export const getMonitors = async () => {
    const { data } = await axios.get(`${API}/monitors`);
    return data;
}

export const updateMonitor = async (monitorInfo) => {
    const { data } = await axios.put(`${API}/monitors/${monitorInfo.id}`, {...monitorInfo});
    return data;
}

export const deleteMonitor = async (monitorId) => {
    const { data } = await axios.delete(`${API}/monitors/${monitorId}`);
    return data;
}

export const createMonitor = async (monitorData) => {
    const { data } = await axios.post(`${API}/monitors/`, {...monitorData});
    return data;
}