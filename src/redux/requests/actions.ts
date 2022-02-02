import { Request } from "../../types/Request";

export const ADD_REQUEST = 'ADD_REQUEST' as const;

export const addRequest = (...requests:Request[]) => ({
    type:ADD_REQUEST,
    payload:requests,
})

export type RequestAction = 
    | ReturnType<typeof addRequest>