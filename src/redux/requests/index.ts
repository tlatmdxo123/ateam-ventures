import { Request } from "../../types/Request"
import { ADD_REQUEST, RequestAction } from "./actions"

const initialState = {
    data:[],
}

interface RequestState{
    data:Request[],
}

export default function requestReducer(state:RequestState = initialState,action:RequestAction){
    switch(action.type){
        case ADD_REQUEST:
            return {...state,data:[...state.data,...action.payload]}
        default:
            return state
    }
}