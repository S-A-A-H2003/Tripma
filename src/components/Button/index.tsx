/* eslint-disable @typescript-eslint/no-explicit-any */
import './style.css';

interface props {
  className: string,
  title: string,
  dataAos?: string,
  onClick?:()=>void,
}

export default function Button({className , title , onClick ,dataAos}:props) {
  return (
    <>
      <button className={className} onClick={onClick} data-aos={dataAos}> 
        {title}     
      </button>
    </>
  )
}