import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Homepage from './apifatch/Homepage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Watchlist from './apifatch/Watchlist.jsx'
import ProductData from './apifatch/ProductData.jsx'
import Contaxt from './contaxt/contaxt.jsx'
import Card from './apifatch/card.jsx'

//page routring

let route = createBrowserRouter([
  {
    path:'/',
    element:<Homepage/>
  },
  {
    path:'/watchlist',
    element: <Watchlist/>
  },
  {
    path:'/Productdata/:id',
    element: <ProductData/>
  },
  {
    path:'/cart',
    element:<Card/>
  }
])

createRoot(document.getElementById('root')).render(
  <Contaxt>
    <RouterProvider router={route}/>
  </Contaxt>

)
