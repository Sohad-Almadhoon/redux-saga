import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";
export const getUsersApi = async () => axios.get("/users");
export const createUserApi = async (user) => axios.post("/users", user);
export const updateUserApi = async (user) => axios.put(`/users/${user.id}`, user);
export const deleteUserApi = async (id) => axios.delete(`/users/${id}`);
