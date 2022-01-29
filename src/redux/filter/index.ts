import { ADD_INGRE_FILTER, ADD_PROCESS_FILTER, FilterAction, REMOVE_INGRE_FILTER, REMOVE_PROCESS_FILTER, RESET_FILTER, TOGGLE_CONSULT_FILTER } from "./actions";

const initialState = {
    ingredients:[],
    process:[],
    consult:false,
}

type FilterState = {
    ingredients:string[],
    process:string[],
    consult:boolean,
}

export default function filterReducer(state:FilterState=initialState,action:FilterAction):FilterState{
    switch(action.type){
        case ADD_INGRE_FILTER:
            return {...state,ingredients:state.ingredients.includes(action.payload) ? state.ingredients : [...state.ingredients,action.payload]}
        case ADD_PROCESS_FILTER:
            return {...state,process:state.process.includes(action.payload) ? state.process : [...state.process,action.payload]}
        case REMOVE_INGRE_FILTER:
            return {...state,ingredients:state.ingredients.filter(filter => filter!==action.payload)}
        case REMOVE_PROCESS_FILTER:
            return {...state,process:state.process.filter(filter => filter!==action.payload)}
        case TOGGLE_CONSULT_FILTER:
            return {...state,consult:!state.consult}
        case RESET_FILTER:
            return {ingredients:[],process:[],consult:false}
        default:
            return state
    }
}


