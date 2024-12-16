import './style.css';

import Header from '../../components/Header';
import FlightsSectionOne from '../../sections/Flights/FlightsSectionOne';
import FlightsSectionTwo from '../../sections/Flights/FlightsSectionTwo';
import FlightsSectionThree from '../../sections/Flights/FlightsSectionThree';
import Footer from '../../components/Footer';

export default function Flights() {
  return (
    <> 
      <Header/>
      <FlightsSectionOne/>
      <FlightsSectionTwo/>
      <FlightsSectionThree/>
      <Footer/>
    </>
  )
}