import { http, HttpResponse } from 'msw'


import { FlightData } from './Data/Flights'
import { flightNames } from './Data/FlightNames'
import { HotelData } from './Data/Hotels'
import { Comments } from './Data/Comments'
 
export const handlers = [

  http.get('https://tripma.com/flights', () => {
    return HttpResponse.json(FlightData)
  }),

  ///////////////////////////////////////////////////////////////////

  http.get('https://tripma.com/flightnames', () => {
    return HttpResponse.json(flightNames)
  }),

  ///////////////////////////////////////////////////////////////////

  http.get('https://tripma.com/Hotels', () => {
    return HttpResponse.json(HotelData)
  }),

  ///////////////////////////////////////////////////////////////////

  http.get('https://tripma.com/comments', () => {
    return HttpResponse.json(Comments)
  }),

]