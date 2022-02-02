export const ADD_MATERIAL_FILTER = 'ADD_MATERIAL_FILTER' as const
export const ADD_METHOD_FILTER = 'ADD_METHOD_FILTER' as const
export const REMOVE_MATERIAL_FILTER = 'REMOVE_MATERIAL_FILTER' as const
export const REMOVE_METHOD_FILTER = 'REMOVE_METHOD_FILTER' as const
export const TOGGLE_CONSULT_FILTER = 'TOGGLE_CONSULT_FILTER' as const
export const RESET_FILTER = 'RESET_FILTER' as const

export const addMaterialFilter = (filter:string) => ({
    type:ADD_MATERIAL_FILTER,
    payload:filter
})
export const addMethodFilter = (filter:string) => ({
    type:ADD_METHOD_FILTER,
    payload:filter
})

export const removeMaterialFilter = (filter:string) => ({
    type:REMOVE_MATERIAL_FILTER,
    payload:filter
})
export const removeMethodFilter = (filter:string) => ({
    type:REMOVE_METHOD_FILTER,
    payload:filter
})

export const toggleConsultToggle = () => ({
    type:TOGGLE_CONSULT_FILTER
})

export const resetFilter = () => ({
    type:RESET_FILTER,
})

export type FilterAction = 
    | ReturnType<typeof addMaterialFilter>
    | ReturnType<typeof addMethodFilter>
    | ReturnType<typeof removeMaterialFilter>
    | ReturnType<typeof removeMethodFilter>
    | ReturnType<typeof toggleConsultToggle>
    | ReturnType<typeof resetFilter>;