import * as types from '../constants'
const DEFAULT_STATE={
    listItem:[],
    isFetching:false,
    dataFetched:false,
    error:false,
    errorMessage:null
}
export default (state=DEFAULT_STATE,action)=>{
    switch(action.type){
        case types.GET_STUDENT_REQUEST:
        case types.ADD_STUDENT_REQUEST:
        case types.DELETE_STUDENT_REQUEST:
        case types.UPDATE_STUDENT_REQUEST:
            return{
                ...state,
                isFetching:true,
                dataFetched:false
            }
        case types.GET_STUDENT_SUCCESS:
            return{
                ...state,
                isFetching:false,
                dataFetched:true,
                error:false,
                errorMessage:null,
                listItem:action.payload.res
            }
        case types.ADD_STUDENT_SUCCESS:
        case types.DELETE_STUDENT_SUCCESS:
        case types.UPDATE_STUDENT_SUCCESS:
            return{
                ...state,
                isFetching:false,
                dataFetched:true,
                error:false,
                errorMessage:null,
            }
        case types.ADD_STUDENT_FAILURE:
        case types.DELETE_STUDENT_FAILURE:
        case types.UPDATE_STUDENT_FAILURE:
            return{
                ...state,
                isFetching:false,
                dataFetched:false,
                error:true,
                errorMessage:action.payload.error

            }
        default:
            return state

        
    }
}







































