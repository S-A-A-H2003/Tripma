/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

//librari
import axios from "axios";

export const useGet=(url:string)=>{

const [data , setData] = useState<any>();
const [isLoading , setIsLoading] = useState<boolean>(false);
const [isSuccessful , setIsSuccessful] = useState<boolean | null>(null);
const [message , setmessage] = useState<string | null>(null);

    useEffect(()=>{

        (async ()=>{
            try{

                setIsLoading(true);
                const response = await axios.get(url);
                setData(response.data);
                setIsLoading(false);
                setIsSuccessful(true);
                setmessage('successful');

            }catch(error:any){

                setIsSuccessful(false);
                setmessage(error);

            }
        })()

    },[url]);

 return {data , isLoading , isSuccessful , message}
}