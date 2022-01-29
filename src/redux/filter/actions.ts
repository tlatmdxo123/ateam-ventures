export const ADD_INGRE_FILTER = 'ADD_INGRE_FILTER' as const
export const ADD_PROCESS_FILTER = 'ADD_PROCESS_FILTER' as const
export const REMOVE_INGRE_FILTER = 'REMOVE_INGRE_FILTER' as const
export const REMOVE_PROCESS_FILTER = 'REMOVE_PROCESS_FILTER' as const
export const TOGGLE_CONSULT_FILTER = 'TOGGLE_CONSULT_FILTER' as const
export const RESET_FILTER = 'RESET_FILTER' as const

export const addIngreFilter = (filter:string) => ({
    type:ADD_INGRE_FILTER,
    payload:filter
})
export const addProcessFilter = (filter:string) => ({
    type:ADD_PROCESS_FILTER,
    payload:filter
})

export const removeIngreFilter = (filter:string) => ({
    type:REMOVE_INGRE_FILTER,
    payload:filter
})
export const removeProcessFilter = (filter:string) => ({
    type:REMOVE_PROCESS_FILTER,
    payload:filter
})

export const toggleConsultToggle = () => ({
    type:TOGGLE_CONSULT_FILTER
})

export const resetFilter = () => ({
    type:RESET_FILTER,
})

export type FilterAction = 
    | ReturnType<typeof addIngreFilter>
    | ReturnType<typeof addProcessFilter>
    | ReturnType<typeof removeIngreFilter>
    | ReturnType<typeof removeProcessFilter>
    | ReturnType<typeof toggleConsultToggle>
    | ReturnType<typeof resetFilter>;