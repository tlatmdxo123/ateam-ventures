import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../contants';

export function useRequest<T>(id?:number){
    const [data,setData] = useState<T>();
    const [isLoading,setLoading] = useState(false);
    const [error,setError] = useState<string>();
    
    async function fetchRequestsData(){
        setLoading(true)
        try {
            const data = await fetch(`${SERVER_URL}/requests/${id ? id : ''}`).then(res => res.json());
            
            setData(data);
        } catch (error) {
            setError((error as Error).message)
        }
        setLoading(false);
    }
    
    useEffect(() => {
        fetchRequestsData();
    },[id]);
    
    return {data,isLoading,error}
}