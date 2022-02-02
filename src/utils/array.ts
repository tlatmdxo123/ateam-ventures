export function isSubSet(main:string[],sub:string[]){

    for(const item of sub){
        if(!main.includes(item)) return false;
    }
    return true;
}