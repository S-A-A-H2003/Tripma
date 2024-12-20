/* eslint-disable @typescript-eslint/no-explicit-any */
import './style.css';

interface props {
  place: string,
  title:string,
  price?:number,
  discription:string,
  img:string,
  typeImg:'sm' | 'md' | 'lg',
  animation?:string,
  className?:string,
  onClick?:()=>void,
}

export default function Card({place , title , price , discription , img , typeImg='md' , animation , className , onClick}:props) {
  return (
    <>
        {typeImg==='md'?
          <div className={className +' w-cardMd h-cardMd rounded-lg shadow-md transition-all'} data-aos={animation} onClick={onClick}>
              <div>
                <img className='rounded-t-lg w-cardMd h-96' src={img} alt={place} />
              </div>
              <div className='px-6 py-4'>
                <div className='flex justify-between items-center pb-1'>
                  <p className='text-gray-600'>{title}<span className='text-customPurple cursor-default'>{place}</span></p>
                 {price?<p className='text-gray-600'>${price}</p>:''}
                </div>  
                <div className='text-gray-400'>{discription}</div>  
              </div>        
          </div>
        :typeImg==='lg'?
          <div className={className +' w-cardLg h-cardMd rounded-lg shadow-md'} data-aos={animation} onClick={onClick}>
            <div>
              <img className='rounded-t-lg w-cardLg h-96' src={img} alt={place} />
            </div>
            <div className='px-6 py-4'>
              <div className='flex justify-between items-center pb-1'>
                <p className='text-gray-600'>{title}<span className='text-customPurple cursor-default'>{place}</span></p>
                <p className='text-gray-600'>${price}</p>
              </div>  
              <div className='text-gray-400'>{discription}</div>  
            </div>        
          </div>
        :typeImg==='sm'?'':''}
    </>
  )
}