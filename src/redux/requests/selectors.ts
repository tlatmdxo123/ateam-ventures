import { RootState } from "..";

export const selectRequests = (state:RootState) => state.requests.data;
export const selectRequest = (id:number) => (state:RootState) => state.requests.data.find(request => request.id === id);