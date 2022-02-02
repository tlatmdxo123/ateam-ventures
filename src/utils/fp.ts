export const pipe = <T>(...fns:Function[]) => (value:T) =>  fns.reduce((acc,fn) => fn(acc),value);