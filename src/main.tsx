import './index.css'
import App from './App.tsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { worker } from './mocks/browser'
//import searchProvider from './contexts/searchContext'
async function startWorker() {
  await worker.start();
}
startWorker();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* <searchProvider> */}
        <App />
      {/* </searchProvider> */}
    </BrowserRouter>
  </StrictMode>,
)
