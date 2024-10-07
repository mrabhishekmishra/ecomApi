import React from 'react'
import { Nav } from './nav'
import  { useContext, useEffect, useState } from "react";
import { mycontaxt } from "../contaxt/contaxt";



function Watchlist() {
  const {whichlist,usewhichlist,Cart,usecart} = useContext(mycontaxt) // use whichlist from global 

  //  data remove   to whichlist 

let removewhichlist = (removeid)=>{

  let remove = whichlist.filter((v,i)=> v.id !== removeid.id)
  
  usewhichlist(remove) 
 
}

// data add to card 
let addcard = (products)=> {

usecart([...Cart,products])  // data update to card 
 
 }
 
  return (
  <>
  <Nav/>
  <div className='container mx-auto p-5'>
    <h1 className='text-[30px] font-bold'>Whichlist</h1>
  <div class="container mx-auto my-8">
  <h2 class="text-2xl font-semibold mb-2">Your Favorite Items</h2>
  <div class="bg-white shadow rounded-lg overflow-hidden">
  <table class="min-w-full table-auto">
        <thead>
          <tr class="bg-gray-50 text-left text-gray-500 uppercase text-sm">
            <th class="px-6 py-4">Product</th>
            <th class="px-6 py-4">Price</th>
            <th class="px-6 py-4">Stock Status</th>
            <th class="px-6 py-4">Action</th>
            <th class="px-6 py-4">Remove</th>
          </tr>
        </thead>
        <tbody>
          {
            whichlist.map(
              (v,i)=>{

                return(
                  <tr class="border-b">
                  <td class="px-6 py-4 flex items-center">
                    <img src={v.img} alt="Hollow Port" class="w-12 h-12 rounded-full mr-4"/>
                    <div>
                      <div class="font-semibold">Hollow Port</div>
                      <div class="text-gray-500 text-sm">Awesome yellow t-shirt</div>
                    </div>
                  </td>
                  <td class="px-6 py-4 text-gray-700">{v.price}</td>
                  <td class="px-6 py-4">
                    <span class="text-sm font-medium text-green-700 bg-green-100 rounded-full px-3 py-1">In Stock</span>
                  </td>
                  <td class="px-6 py-4">
                    <button class="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={()=> addcard(v)}>Add to Cart</button>
                  </td>
                  <td class="px-6 py-4">
                  <button class="bg-[red] text-white px-4 py-2 rounded-lg" onClick={()=> removewhichlist(v)}>Remove</button>
                  </td>
                </tr>
                )
              }
            )

          }
         
          
          
        </tbody>
      </table>
  </div>
  </div>
  </div>
 
  </>
  )
}

export default Watchlist
