import './style.css';

//components
import Search from '../../../components/Search';

export default function FlightsSectionOne() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-evenly bg-[url('./assets/Flights/WorldMapFlights.png')]"> 
    
      <div className="TopDiv">
        <h1 className="text-7xl text-center font-extrabold bg-gradient-to-r from-indigo-400 via-indigo-600 to-indigo-400 bg-clip-text text-transparent transition-all max-md:text-6xl max-sm:text-4xl ma">It’s more than <br/> just a trip</h1>
      </div>

      <Search/>

    </section>
    
  )
}
