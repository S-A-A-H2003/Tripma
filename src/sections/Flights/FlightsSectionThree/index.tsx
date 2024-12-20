/* eslint-disable @typescript-eslint/no-explicit-any */
import Comment from '../../../components/Comment';
import { useGet } from '../../../hooks/get';
import './style.css';

export default function FlightsSectionThree() {

  const {data:comment} = useGet(import.meta.env.VITE_API_COMMENTS);
  
  return (
    <>
      <section className='w-full h-fit flex flex-col items-center p-16'>
        <h3 className='text-gray-600 mb-6'>What <span className='text-customPurple'>Tripma</span> users are saying</h3>
        <div className='flex justify-evenly flex-wrap'>
          {comment?.map((items:any)=>
            <Comment
              className="max-sm:w-80 max-xl:h-80"
              name={items.name}
              adress={items.adress}
              starts={items.starts}
              comment={items.comment}
              avatar={items.avatar}
              key={items.id}
            ></Comment>
          )}
        </div>
      </section>  
    </>
  )
}