import { http, HttpResponse } from 'msw'
import { FlightData } from './Data/Flights'
 
export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://tripma.com/user', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(FlightData)
  }),
]