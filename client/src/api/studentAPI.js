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

export const get_students = () => axios.get(BackURL+"crud/get_students");

export const get_student = (id) => axios.get(BackURL+"crud/get_student/"+id);

export const deleteStudent = (id) => axios.get(BackURL+"crud/delete_student/"+id)

export const edit_student = (datas) => axios.post(BackURL+"crud/edit_student", {
    first_name: datas.first_name || "",
    last_name: datas.last_name || "",
    date_of_birth: datas.date_of_birth || "",
    email: datas.email || "",
    phone: datas.phone || "",
    favorite_sport: datas.favorite_sport || "",
    id: datas.id || ""
});
