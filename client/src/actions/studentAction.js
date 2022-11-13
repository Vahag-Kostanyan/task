import * as api from "../api/studentAPI"


export const create_student = (datas) => async (dispatch) => {
    const res = await api.create_student(datas);

    const data = res.data;
    
    return data;
}

export const get_students = () => async(dispatch) => {

    const res = await api.get_students();

    const data = res.data;

    
    dispatch({type: "GET_STUDENTS", payload: data.data})

}


export const get_student = (id) => async() => {
    const res = await api.get_student(id);

    const data = res.data;

    return data
} 

export const delete_student = (id) => async(dispatch) => {
    const res = await api.deleteStudent(id);

    const data = res.data;

    dispatch({type: "DELETE_STUDENT", payload: data.id})
}
export const edit_student = (datas) => async (dispatch) => {
    const res = await api.edit_student(datas);

    const data = res.data;
    
    return data;
}