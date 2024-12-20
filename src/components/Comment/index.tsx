/* eslint-disable @typescript-eslint/no-explicit-any */
import './style.css';

//Components
import Start from '../Start';

interface props {
  name: string,
  adress:string,
  starts:1 | 2 | 3 | 4 | 5,
  comment:string,
  avatar:string,
  key:any,
  animation?:string,
  className?:string,
  onClick?:()=>void,
}

export default function Comment({name , adress , starts , comment , avatar , key , animation , className , onClick}:props) {
  return (
    <>
      <div className={className +' w-cardMd h-72 p-4 flex'} key={key} data-aos={animation} onClick={onClick}>
          <div className='pr-2'>
            <img className='w-48 h-12' src={avatar} alt={name} />
          </div>
          <div>
            <h4 className='text-gray-500'>{name}</h4>    
            <p className='text-gray-400'>{adress}</p>  
            <div className='mt-2'><Start starts={starts}/></div>  
            <p className='text-gray-600 mt-3'>{comment}</p>  
          </div>        
      </div>
    </>
  )
}