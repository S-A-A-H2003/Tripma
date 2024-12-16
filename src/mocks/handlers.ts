import { http, HttpResponse } from 'msw'
import { FlightData } from './Data/Flights'
import { flightNames } from './Data/FlightNames'
import { HotelData } from './Data/Hotels'
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://tripma.com/flights', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(FlightData)
  }),

  ///////////////////////////////////////////////////////////////////
  http.get('https://tripma.com/flightnames', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(flightNames)
  }),
  ///////////////////////////////////////////////////////////////////
  http.get('https://tripma.com/Hotels', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(HotelData)
  }),
]