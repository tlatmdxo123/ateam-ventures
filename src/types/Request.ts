export interface RequestType{
    [key:string]:number | string | string[]
}

export interface Request extends RequestType{
    "id": number,
    "title": string,
    "client": string,
    "due": string,
    "count": number,
    "amount": number,
    "method": string[],
    "material": string[],
    "status": string,
}