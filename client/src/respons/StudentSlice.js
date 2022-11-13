export default (students = [], action) => {
    switch(action.type) {
        case "GET_STUDENTS":
            return action.payload;
        case "DELETE_STUDENT":
            students = students.filter(item => item.id != action.payload);
        default:
            return students;
    }
}