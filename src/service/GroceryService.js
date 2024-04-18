import axios from 'axios';

const REST_API_BASE_URL = "http://18.206.255.95:8080/api";

export const listGrocery = () => axios.get(REST_API_BASE_URL + "/grocery");
export const listSources = () => axios.get(REST_API_BASE_URL + "/sources");
export const deleteGrocery = (id) => axios.delete(REST_API_BASE_URL + `/delete/${id}`);
export const addGrocery = (grocery) => axios.post(REST_API_BASE_URL + "/add", grocery);
export const updateGrocery = (id, grocery) => axios.put(REST_API_BASE_URL + `/update/${id}`, grocery);

//const REST_API_BASE_URL_GYM = "http://3.82.224.80:8080/gym/";

const REST_API_BASE_URL_GYM = "http://localhost:8080/gym";
export const listGymRecords = () => axios.get(REST_API_BASE_URL_GYM + "/records");

