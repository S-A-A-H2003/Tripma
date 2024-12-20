/* eslint-disable @typescript-eslint/no-explicit-any */
import './style.css';

//Librari
import { useNavigate } from 'react-router-dom';

//Components
import Button from '../../../components/Button';
import Card from '../../../components/Card';

//Hooks
import { useGet } from '../../../hooks/get';

//Assets
import arrowRight from '../../../assets/Flights/arrowRight.png';

//Constants
import { RouterPath } from '../../../constants/RouterPath';

export default function FlightsSectionTwo() {


  /************************************API********************************************/

  const {data:dataFlights} = useGet(import.meta.env.VITE_API_FLIGHTS)
  const cardMd = dataFlights?.filter((items:any)=>items.typeimg=="md").slice(0, 3) 
  const cardLg = dataFlights?.filter((items:any)=>items.typeimg=="lg").slice(0, 1) 
  const {data:dataHotels} = useGet(import.meta.env.VITE_API_HOTELS)
  const cardMdHotels = dataHotels?.filter((items:any)=>items.typeimg=="md").slice(0, 3) 

  /************************************Librari********************************************/

  const navigate = useNavigate();

  

  return (
    <>
      <section className='w-full h-fit flex flex-col items-center py-16 '>

        <div className='w-full'>

            <div className='flex justify-between items-center mx-16 mb-6 max-sm:px-3'>
              <h3 className='text-gray-600  max-sm:text-xs'>Find your next adventure with these <span className='text-Turquoise'>flight deals</span></h3>
              <div className='flex items-center'>
                <p className='text-gray-400 ml-1 pb-1 cursor-default max-sm:text-sm' onClick={()=>navigate(RouterPath.FLIGHTS)}>ALL</p>
                <img src={arrowRight} alt="" />
              </div>
            </div>

            <div className='flex justify-evenly items-center flex-wrap'>

              {cardMd?.map((items:any ,index:any)=>
                <Card
                  className="max-xl:my-3 max-sm:w-80 max-xl:h-cardLg"
                  key={index}
                  place={items.place}
                  title={items.title}
                  img={items.img}
                  typeImg={items.typeimg}
                  discription={items.discription}
                  price={items.price}
                  animation='flip-left'
                  onClick={()=>navigate(`/FlightsDetails/${items.id}`)}
                ></Card>
              )}

              <div className='my-10 max-2xl:hidden'>
                {cardLg?.map((items:any , index:any)=>
                    <Card
                      key={index}
                      place={items.place}
                      title={items.title}
                      img={items.img}
                      typeImg={items.typeimg}
                      discription={items.discription}
                      price={items.price}
                      animation='zoom-in-up'
                      onClick={()=>navigate(`/FlightsDetails/${items.id}`)}
                    ></Card>
                )}
              </div>
            
            </div>

        </div>

        <div className='w-full'>
              
          <div className='flex justify-between items-center mx-16 my-6 max-sm:px-3'>
              <h3 className='text-gray-600 max-sm:text-sm'>Explore unique <span className='text-Turquoise'>places to stay</span></h3>
              <div className='flex items-center'>
                <p className='text-gray-400 ml-1 pb-1 cursor-default max-sm:text-sm' onClick={()=>navigate(RouterPath.HOTELS)}>ALL</p>
                <img src={arrowRight} alt="" />
              </div>
          </div>

          <div className='flex justify-evenly items-center flex-wrap'>
              {cardMdHotels?.map((items:any , index:any)=>
                <Card
                  className="max-xl:my-3 max-xl:w-80 max-xl:h-cardLg"
                  key={index}
                  place={items.place}
                  title={items.title}
                  img={items.img}
                  typeImg={items.typeimg}
                  discription={items.discription}
                  animation='flip-left'
                  onClick={()=>navigate(`/HotelDetails/${items.id}`)}
                ></Card>
              )}
          </div>

        </div> 

        <Button
          className='mt-9 w-48 h-12 bg-customPurple text-white text-center rounded-md  hover:border-customPurple hover:border-solid hover:border-2 hover:bg-white hover:text-customPurple transition-all'
          title='Explor more stays'
          dataAos="zoom-in"
          onClick={()=>navigate(RouterPath.HOTELS)}
        />

      </section> 
    </>
  )
}