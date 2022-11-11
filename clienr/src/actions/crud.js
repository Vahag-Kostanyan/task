import * as api from "../api/authAPI"


export const create_student = (datas) => async (dispatch) => {
    const res = await api.create_student(datas);

    const data = res.data;

    console.log(data.data);
    if(data.status == "error"){
        return data.data;
    }
    console.log(123);

}