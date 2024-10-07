import React, { createContext ,useState } from 'react'

export let mycontaxt = createContext()  // create contaxt

function Contaxt({children}) {
  
  const [whichlist,usewhichlist] = useState([])  //  data to use global 
  const [Cart,usecart] = useState([])
  return (
   // send data to global value thoiugh 
    <mycontaxt.Provider value={{whichlist,usewhichlist,Cart,usecart}}>    
      {children}
    </mycontaxt.Provider>

  )
}

export default Contaxt
