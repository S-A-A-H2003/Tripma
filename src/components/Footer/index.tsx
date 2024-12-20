import './style.css';

//Assets
import appstore from '../../assets/Flights/appstore.png'
import googleplay from '../../assets/Flights/googleplay.png'
import twiter from '../../assets/Flights/twiter.png'
import instagram from '../../assets/Flights/instagram.png'
import facebook from '../../assets/Flights/facebook.png'

import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className='h-fit py-7 '>
        <div className='flex justify-between pt-16 pb-6 px-16 flex-wrap'>

          <div className='max-lg:hidden'>
            <p className='text-customPurple text-4xl font-bold'>Tripma</p>
          </div>

          <div>
            <ul className='text-gray-400'>
              <li className='text-gray-600 p-1 mb-2'><NavLink to="/">About</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">About Tripma</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Howe it works</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Careers</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Prees</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Blog</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Forum</NavLink></li>
            </ul>
          </div>

          <div>
            <ul className='text-gray-400'>
              <li className='text-gray-600 p-1 mb-2'><NavLink to="/">Partner with us</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Partnership programs</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Affiliate program</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Connectivity partners</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Promotions and events</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Integrations</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Community</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Loyalty program</NavLink></li>
            </ul>
          </div>

          <div>
           <ul className='text-gray-400'>
              <li className='text-gray-600 p-1 mb-2'><NavLink to="/">Support</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Help Center</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Contact us</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Privacy policy</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Terms of service</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Trust and safety</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Accessibility</NavLink></li>
            </ul>
          </div>

          <div>
           <ul className='text-gray-400'>
              <li className='text-gray-600 p-1 mb-2'>Get the app</li>
              <li className='p-1 mb-2'><NavLink to="/">Tripma for Android</NavLink> </li>
              <li className='p-1 mb-2'><NavLink to="/">Tripma for iOS</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/">Mobile site</NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/"><img src={appstore} alt="App Store" /></NavLink></li>
              <li className='p-1 mb-2'><NavLink to="/"><img src={googleplay} alt="Google Play" /></NavLink></li>
            </ul>
          </div>
        </div>

        <div className='w-full h-0.5 bg-gray-200'></div>

        <div className='flex justify-between items-center  py-4 px-16 flex-wrap max-lg:px-7'>
          <div className='pb-3 flex'>
            <img src={twiter} alt="Twiter" className='pl-5' />
            <img src={instagram} alt="Instagram" className='pl-5' />
            <img src={facebook} alt="Facebook" className='pl-5' />
          </div>
          <div className='text-gray-400'>© 2020 Tripma incorporated</div>
        </div>

      </footer>
    </>
  )
}