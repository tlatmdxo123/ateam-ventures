import { Request } from "../types/Request";
import { isSubSet } from "./array";

export const filterBy = (filters:string[],type:string) => (list:Request[]) => {
    if(filters.length === 0) return list;

    return list.filter(item => isSubSet(item[type] as string[],filters));
}

export const filterByConsult = (consult:boolean) => (list:Request[]) => {
    if(!consult) return list;
    return list.filter(item => item.status==='상담중');
}
