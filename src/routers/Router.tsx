import { lazy } from "react";

//constants
import { RouterPath } from "../constants/RouterPath";

//components
const Flights = lazy(()=>import('../pages/Flights'));
const FlightsDetails = lazy(()=>import('../pages/FlightsDetails'));
const Hotels = lazy(()=>import('../pages/Hotels'));
const HotelDetails = lazy(()=>import('../pages/HotelDetails'));
const Packages = lazy(()=>import('../pages/Packages'));
const Profile = lazy(()=>import('../pages/Profile'));
const SignIn = lazy(()=>import('../pages/SignIn'));
const SignUp = lazy(()=>import('../pages/SignUp'));
const ForgetPassword = lazy(()=>import('../pages/ForgetPassword'));
const VerifyCode = lazy(()=>import('../pages/VerifyCode'));
const ResetPassword = lazy(()=>import('../pages/ResetPassword'));
const FormOne = lazy(()=>import('../pages/FormOne'));
const FormTwo = lazy(()=>import('../pages/FormTwo'));
const OrderSeat = lazy(()=>import('../pages/OrderSeat'));
const Error404 = lazy(()=>import('../pages/Error404'));


export const Router = [

    {index:true , element:<Flights/>},
    {path:RouterPath.FLIGHTSDETAILS , element:<FlightsDetails/>},
    {path:RouterPath.HOTELS , element:<Hotels/>},
    {path:RouterPath.HOTELDETAILS , element:<HotelDetails/>},
    {path:RouterPath.PACKAGES , element:<Packages/>},
    {path:RouterPath.PROFILE , element:<Profile/>},
    {path:RouterPath.SIGNIN , element:<SignIn/>},
    {path:RouterPath.SIGNUP , element:<SignUp/>},
    {path:RouterPath.FORGETPASSWORD , element:<ForgetPassword/>},
    {path:RouterPath.VERIFYCODE , element:<VerifyCode/>},
    {path:RouterPath.RESETPASSWORD , element:<ResetPassword/>},
    {path:RouterPath.FORMONE , element:<FormOne/>},
    {path:RouterPath.FORMTWO , element:<FormTwo/>},
    {path:RouterPath.ORDERSEAT , element:<OrderSeat/>},
    {path:RouterPath.ERROR404 , element:<Error404/>},

];