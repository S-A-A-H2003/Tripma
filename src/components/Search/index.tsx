/* eslint-disable @typescript-eslint/no-explicit-any */
import './style.css';
import { useState } from 'react';

//Hooks
import { useGet } from '../../hooks/get';

//Components
import Counter from '../../components/Counter';

//DatePicker
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


//Imag
import departure from '../../assets/Flights/departure.png'
import arrival from '../../assets/Flights/arrival.png'
import personsolid from '../../assets/Flights/personsolid.png'
import calendarwithdates from '../../assets/Flights/calendarwithdates.png'
import Button from '../../components/Button';
import { useSearchContext } from '../../contexts/searchContext';

export default function Search() {


 /*********************Interface****************************/

  interface typeOfStateClick{
    [arg:string]:boolean,
  }

  /*********************State****************************/
  
  const [stateClick, setStateClick] = useState<typeOfStateClick>({
    'fromWhere':false,
    'whereTo':false,
    'date':false,
    'passenger':false,
  });
  const [checkbox, setCheckbox] = useState<'roundTrip' | 'oneWay'>('roundTrip');
  const {setSearch} = useSearchContext();
  const [fromWhere, setFromWhere] = useState<string>('From where?'); 
  const [whereTo, setWhereTo] = useState<string>('Where To?'); 
  const [adult, setAdult] = useState<number | "1 adult">("1 adult"); 
  const [minors, setMinor] = useState<number>(0);   
  const [startDate, setStartDate] = useState(new Date()); 
  const [endDate, setEndDate] = useState(new Date()); 
  const [defaultDate] = useState(new Date()); 

 /*********************Method****************************/

  const handleClick =(arg:string)=>{
    setStateClick({[arg]:!stateClick[arg]}); 
  }
  const counterValueAdult =(counterValue:any)=>{
    setAdult(counterValue); 
  }  
  const counterValueMinor =(counterValue:any)=>{
    setMinor(counterValue); 
  }
  const handleSubmit =()=>{
   setSearch([fromWhere , whereTo , adult , minors , startDate , endDate])
  }


 /*********************Api****************************/

  const {data , isLoading , isSuccessful , message} = useGet(import.meta.env.VITE_API_FLIGHTNAMES);//fetch flight names
  const flightNames = {data , isLoading , isSuccessful , message};

  return (
    <>
      <div className="buttomDiv flex flex-wrap p-4">

        <div className="inputWhereFrom max-xl:mx-1 max-xl:my-1" data-aos="zoom-in">
          <div className="flex items-center w-80 h-14 p-3 bg-white shadow-md shadow-gray-400 rounded-md transition-all duration-300 ease-in-out hover:border-4 hover:border-purple-500 hover:shadow-none" onClick={()=>handleClick("fromWhere")}>
            <img src={departure} alt=""  />
            <span className={fromWhere=="From where?"?"text-gray-400 p-2":"text-gray-600 p-2"}>{fromWhere}</span>
          </div>
          <div className={stateClick.fromWhere?"w-72 h-80 bg-white shadow-md shadow-gray-400 rounded-md mt-3 p-7":"hidden"}>
            {flightNames.data?.map((items:any , index:number)=><div key={index} onClick={()=>setFromWhere(items.name)} className='text-gray-600 mt-2 hover:bg-purple-600 hover:text-white h-8 pl-3 rounded-md flex items-center'>{items.name}</div>)}
          </div>
        </div>

        <div className="inputToWhere max-xl:mx-1 max-xl:my-1" data-aos="zoom-in">
          <div className="flex items-center w-80 h-14 p-3 bg-white shadow-md shadow-gray-400 rounded-md transition-all duration-300 ease-in-out hover:border-4 hover:border-purple-500 hover:shadow-none" onClick={()=>handleClick("whereTo")}>
            <img src={arrival} alt=""  />
            <span className={whereTo=="Where To?"?"text-gray-400 p-2":"text-gray-600 p-2"}>{whereTo}</span>
          </div>
          <div className={stateClick.whereTo?"w-72 h-80 bg-white shadow-md shadow-gray-400 rounded-md mt-3 p-7":"hidden"}>
            {flightNames.data?.map((items:any , index:number)=><div key={index} onClick={()=>setWhereTo(items.name)} className='text-gray-600 mt-2 hover:bg-purple-600 hover:text-white h-8 pl-3 rounded-md flex items-center'>{items.name}</div>)}
          </div>
        </div>

        <div className="inputCalender max-xl:mx-1 max-xl:my-1" data-aos="zoom-in">
          <div className="flex items-center w-64 h-14 p-3 bg-white shadow-md shadow-gray-400 rounded-md transition-all duration-300 ease-in-out hover:border-4 hover:border-purple-500 hover:shadow-none" onClick={()=>handleClick("date")}>
            <img src={calendarwithdates} alt=""  />
            <span className={startDate.getTime()!==defaultDate.getTime()?"text-gray-600 p-2":"text-gray-400 p-2"}>{startDate.getTime()!==defaultDate.getTime()?startDate.getDate()+"-"+(startDate.getMonth()+1)+"-"+startDate.getFullYear()+" / "+endDate.getDate()+"-"+(endDate.getMonth()+1)+'-'+endDate.getFullYear():'Depart - Arrive'}</span>
          </div>
          <div className={stateClick.date?"w-auto h-96 bg-white shadow-md shadow-gray-400 rounded-md mt-3 p-7":"hidden"}>
            <div>
              <div className='flex justify-between'>
                <div className='flex'>
                  <div onClick={()=>setCheckbox('roundTrip')} className='text-gray-400 mx-2 cursor-default'><span className={checkbox==='roundTrip'?'rounded-full bg-customPurple text-center mr-1':'rounded-full bg-gray-400 text-center mr-1'}>▫️</span>Round Trip</div>
                  <div onClick={()=>setCheckbox('oneWay')} className='text-gray-400 mx-2 cursor-default'><span className={checkbox==='oneWay'?'rounded-full bg-customPurple text-center mr-1':'rounded-full bg-gray-400 text-center mr-1'}>▫️</span>One Way</div>
                </div>
                <Button
                  className='w-16 h-12 text-white bg-customPurple rounded-md mb-2'
                  title='Done'
                  onClick={()=>setStateClick({date:false})}
                ></Button>
              </div>
            </div>
            <div className='flex'>
              {checkbox==='roundTrip'?
                <>
                  <DatePicker
                    selected={startDate}
                    onChange={(date:any) => setStartDate(date)}
                    inline
                    />
                    <DatePicker
                    selected={endDate}
                    onChange={(date:any) => setEndDate(date)}
                    inline
                    />
                </>
              :
                <DatePicker
                selected={startDate}
                onChange={(date:any) => setEndDate(date)}
                inline
                />
             }
            </div>
          </div>
        </div>

        <div className="inputPassenger max-xl:mx-1 max-xl:my-1" data-aos="zoom-in">
          <div className="flex items-center w-52 h-14 p-3 bg-white shadow-md shadow-gray-400 rounded-md transition-all duration-300 ease-in-out hover:border-4 hover:border-purple-500 hover:shadow-none" onClick={()=>handleClick("passenger")}>
            <img src={personsolid} alt=""  />
            <span className={adult==="1 adult"?"text-gray-400 p-2":"text-gray-600 p-2"}>{adult} Adults {minors>0?minors+' Minors':''} </span>
          </div>
          <div className={stateClick.passenger?"w-64 h-40 bg-white shadow-md shadow-gray-400 rounded-md mt-3 p-7":"hidden"}>
            <div className='mb-3'><Counter value={1} title='Adults' counterValue={counterValueAdult}/></div>
            <div><Counter value={0} title='Minors' counterValue={counterValueMinor}/></div>
          </div>
        </div>

        <Button
          className='w-24 h-14 bg-customPurple text-white text-center rounded-md'
          title='Search'
          dataAos="zoom-in"
          onClick={handleSubmit}
        />

      </div>
    </>
  )
}