import { RootState } from "..";

export const selectMaterials = (state:RootState) => state.filter.materials;
export const selectMethods = (state:RootState) => state.filter.methods;
export const selectConsultStatus = (state:RootState) => state.filter.consult;