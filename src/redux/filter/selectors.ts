import { RootState } from "..";

export const selectIngredients = (state:RootState) => state.filter.ingredients;
export const selectProcess = (state:RootState) => state.filter.process;
export const selectConsultStatus = (state:RootState) => state.filter.consult;