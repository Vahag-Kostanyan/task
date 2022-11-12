import * as api from "../api/authAPI"


export const create_student = (datas) => async (dispatch) => {
    const res = await api.create_student(datas);

    const data = res.data;

    console.log(data.data);
    if(data.status == "ok"){
        return
        window.location.assign('/')
    }
    
    return data.data;
}