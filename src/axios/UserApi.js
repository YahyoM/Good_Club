import axios from "axios";
import $host, { API_URL } from "./index"

export const signIn = async (user) => {
  const { data } = await axios.post(
    `${API_URL}/auth/login`,
    {
      username: user.username,
      password: user.password,
    },
    {
      withCredentials: true,
    }
  );
  return data;
};

export const refreshUser = async () => {
  const { data } = await axios.get(`${API_URL}/auth/refresh/`, {
    withCredentials: true,
  });
  return data;
};

export const logout = async () => {
  const { data } = await axios.delete(`${API_URL}/auth/logout`, {
    withCredentials: true,
  });
  return data;
};

export const createUser = async () => {
  const { data } = await $host.post(`${API_URL}/users/create`);
  return data;
};


export const getUsers = async (page, limit) => {
    const { data } = await $host.get(`${API_URL}/users/`, {
      params: {
        page: page,
        limit: limit,
      },
    });
    return data;
};


export const fillUser = async (formData) => {
  const { data } = await $host.post(`/users/fill-user`, formData);
  return data;
};


export const getLessons = async () => {
  const { data } = await $host.get(`/lesson/student`)
   
  return data;
};

export const getStats = async () => {
  const { data } = await $host.get(`${API_URL}/admin/stats`);
  return data;
};