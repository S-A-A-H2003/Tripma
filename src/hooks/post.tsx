/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useEffect, useState } from "react";

export const usePost=({url , body}:any)=>{

    const [data , setData] = useState<any>();
    const [isLoading , setIsLoading] = useState<boolean>(false);
    const [isSuccessful , setIsSuccessful] = useState<boolean | null>(null);
    const [message , setmessage] = useState<string | null>(null);
    
        useEffect(()=>{
    
            (async ()=>{
                try{
    
                    setIsLoading(true);
                    const response = await axios.post(url,body);
                    setData(response.data);
                    setIsLoading(false);
                    setIsSuccessful(true);
                    setmessage('successful');
    

                }catch(error:any){
    
                    setIsSuccessful(false);
                    setmessage(error);
    
                }
            })()
    
        },[url,body]);
    
     return {data , isLoading , isSuccessful , message}
}