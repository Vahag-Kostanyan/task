    import { combineReducers } from "redux"
    import StudentSlice from "./StudentSlice.js"

    export default combineReducers({students: StudentSlice})