import * as types from '../constants'
export function getStudentRequest(payload){
    return{
        type:types.GET_STUDENT_REQUEST,
        payload
    }
}
export function getStudentSuccess(payload){
    return{
        type:types.GET_STUDENT_SUCCESS,
        payload
    }
}
export function getStudentFailure(payload){
    return{
        type:types.GET_STUDENT_FAILURE,
        payload
    }
}
//ham add 
export function addStudentRequest(payload){
    return{
        type:types.ADD_STUDENT_REQUEST,
        payload
    }
}
export function addStudentSuccess(payload){
    return{
        type:types.ADD_STUDENT_SUCCESS,
        payload
    }
}
export function addStudentFailure(payload){
    return{
        type:types.ADD_STUDENT_FAILURE,
        payload
    }
}
//ham delete
export function deleteStudentRequest(payload){
    return{
        type:types.DELETE_STUDENT_REQUEST,
        payload
    }
}
export function deleteStudentSuccess(payload){
    return{
        type:types.DELETE_STUDENT_SUCCESS,
        payload
    }
}
export function deleteStudentFailure(payload){
    return{
        type:types.DELETE_STUDENT_FAILURE,
        payload
    }
}
// ham update 
export function updateStudentRequest(payload){
    return{
        type:types.UPDATE_STUDENT_REQUEST,
        payload
    }
}
export function updateStudentSuccess(payload){
    return{
        type:types.UPDATE_STUDENT_SUCCESS,
        payload
    }
}
export function updateStudentFailure(payload){
    return{
        type:types.UPDATE_STUDENT_FAILURE,
        payload
    }
}


