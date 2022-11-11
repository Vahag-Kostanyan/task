import axios from "axios";
const BackURL = "http://127.0.0.1:8000/api/"



export const create_student = (datas) => axios.post(BackURL+"crud/create_student", {
    first_name: datas.first_name || "",
    last_name: datas.last_name || "",
    date_of_birth: datas.date_of_birth || "",
    email: datas.email || "",
    phone: datas.phone || "",
    favorite_sport: datas.favorite_sport || "",
});