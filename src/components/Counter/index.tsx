import { useEffect, useState } from 'react';
import './style.css';

interface props {
  value: number,
  title?:string,
  counterValue:(counterValue:number)=>void,
  onChange?:()=>void,
}

export default function Counter({value , title , onChange , counterValue}:props) {
  const [counter, setCounter] = useState(value);

  useEffect(() => {
    counterValue(counter)
  }, [counter,counterValue]);
  return (
    <>
      <div className='flex justify-around items-center'>
        {title ?<span className='text-gray-400'>{title}</span> :''}
        <div onClick={()=>setCounter(counter>value?counter-1:counter)} onChange={onChange} className='w-8 h-8 bg-gray-100 text-purple-500 text-3xl text-center cursor-default'>-</div>
        <div>{counter}</div>
        <div onClick={()=>setCounter(counter+1)} className='w-8 h-8 bg-gray-100 text-purple-500 text-3xl text-center cursor-default'>+</div>
      </div>
    </>
  )
}