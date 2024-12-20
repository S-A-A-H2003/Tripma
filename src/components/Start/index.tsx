/* eslint-disable @typescript-eslint/no-unused-vars */
import './style.css';

import starfilled from '../../assets/Flights/starfilled.png'
import starunfilled from '../../assets/Flights/starunfilled.png'

interface props {
  starts:1 | 2 | 3 | 4 | 5,
}

export default function Start({starts}:props) {
  return (
    <>
      <div className={'flex'}>
        {Array(starts).fill(null).map((_ , index) =><img src={starfilled} alt='Star Filled' className='ml-1' key={index} />)}
        {Array(5-starts).fill(null).map((_ , index)=><img src={starunfilled} alt='Star Unfilled' className='ml-1' key={index} />)}
      </div>
    </>
  )
}