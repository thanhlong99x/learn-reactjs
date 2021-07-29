import axiosClient from "./axiosClient";

export const getAll= () =>{
    const url = `/product`;
    return axiosClient.get(url);
};
export const edit= (id) =>{
    const url = `/product/${id}`;
    return axiosClient.put(url);
};
export const get= (id) =>{
    const url = `/product/${id}`;
    return axiosClient.get(url);
};
export const remove= (id) =>{
    const url = `/product/${id}`;
    return axiosClient.delete(url);
};
export const add= (item) =>{
    const url = `/product`;
    return axiosClient.post(url, item);
};