import axiosInstance from "./axiosInstance";

export const createUser = (data) => axiosInstance.post("/users", data);

export const getUser = (id) => axiosInstance.get(`/users/${id}`);

export const getUsers = () => axiosInstance.get("/users");

export const updateUser = (id, data) => axiosInstance.put(`/users/${id}`, data);

export const deleteUser = (id) => axiosInstance.delete(`/users/${id}`);
