import './App.css';

import { useRoutes } from 'react-router-dom';
import { Suspense } from 'react';

//components
import Loading from './components/Loading';

//constants
import { Router } from './routers/Router';

// Example to use custom hook get
// import { useGet } from './hooks/get';

export default function App() {

  const RouterHere = useRoutes(Router);

  // Example to use custom hook get
  // const {data , isLoading , isSuccessful , message} = useGet('https://tripma.com/user');
  // console.log(data , isLoading , isSuccessful , message);
  

  return (
    <>
      <Suspense fallback = {<Loading/>}>
        {RouterHere}
      </Suspense>

      
    </>
  )
}

