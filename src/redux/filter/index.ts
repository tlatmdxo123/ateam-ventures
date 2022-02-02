import { ADD_MATERIAL_FILTER, ADD_METHOD_FILTER, FilterAction, REMOVE_MATERIAL_FILTER, REMOVE_METHOD_FILTER, RESET_FILTER, TOGGLE_CONSULT_FILTER } from "./actions";

const initialState = {
    materials:[],
    methods:[],
    consult:false,
}

export type FilterState = {
    materials:string[],
    methods:string[],
    consult:boolean,
}

export default function filterReducer(state:FilterState=initialState,action:FilterAction):FilterState{
    switch(action.type){
        case ADD_MATERIAL_FILTER:
            return {...state,materials:state.materials.includes(action.payload) ? state.materials : [...state.materials,action.payload]}
        case ADD_METHOD_FILTER:
            return {...state,methods:state.methods.includes(action.payload) ? state.methods : [...state.methods,action.payload]}
        case REMOVE_MATERIAL_FILTER:
            return {...state,materials:state.materials.filter(filter => filter!==action.payload)}
        case REMOVE_METHOD_FILTER:
            return {...state,methods:state.methods.filter(filter => filter!==action.payload)}
        case TOGGLE_CONSULT_FILTER:
            return {...state,consult:!state.consult}
        case RESET_FILTER:
            return {materials:[],methods:[],consult:false}
        default:
            return state
    }
}


