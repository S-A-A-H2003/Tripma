import './style.css';
import { useState } from 'react';

//Librari
import { NavLink, useNavigate } from 'react-router-dom';

//Constatns
import { RouterPath } from '../../constants/RouterPath';

//Components
import Button from '../Button';

//Assets
import List from '../../assets/Header/List.png';


export default function Header() {

  const navigate = useNavigate();
  const [click, setClick] = useState(false);

  return (
    <>
      <header className='w-full h-24 p-11 flex justify-between items-center'>

        <div className='text-customPurple text-4xl font-bold' onClick={()=>navigate(RouterPath.HOME)}>Tripma</div>

        <div>
          <div onClick={()=>setClick(!click)} className='hidden max-lg:block'><img src={List} alt="List" className='w-16 h-16' /></div>

          <ul className={click?'flex items-center list-none max-lg: flex-col-reverse max-lg: relative top-36 max-lg:bg-white max-lg: shadow-md max-lg: rounded-md max-lg: z-50 ':'flex items-center list-none max-lg:hidden'}>

            {click?<li className='text-red-500 pb-2 text-xl' onClick={()=>setClick(false)}>X</li>:''}

            <li className='ml-4 p-3 rounded-md text-gray-400 hover:text-customPurple'>
              <NavLink to={RouterPath.FLIGHTS}>Flights</NavLink>
            </li>
            <li className='ml-4 p-3 rounded-md text-gray-400 hover:text-customPurple'>
              <NavLink to={RouterPath.HOTELS}>Hotals</NavLink>
            </li>
            <li className='ml-4 p-3 rounded-md text-gray-400 hover:text-customPurple'>
              <NavLink to={RouterPath.PACKAGES}>Packages</NavLink>
            </li>
            <li className='ml-4 p-3 rounded-md text-gray-400 hover:text-customPurple'>
              <NavLink to={RouterPath.SIGNIN}>Sign in</NavLink>
            </li>
            <li className='ml-4 p-3 rounded-md text-gray-400 hover:text-customPurple'>
              <NavLink to={RouterPath.SIGNUP}>
                <Button
                  className='w-24 h-12 bg-customPurple text-white text-center rounded-md border-customPurple border-2 hover:border-customPurple hover:border-solid hover:border-2 hover:bg-white hover:text-customPurple transition-all'
                  title='Sign up'
                />
              </NavLink>
            </li>

          </ul>
        </div>

      </header> 
    </>
  )
}