import Card from "./Card"
import { useState } from "react"
function App() {
  const value=5
  const setValueFunc=()=>{
    value+1
  }
  const setValue=function(){ 
    
  }
  return (
    <>
      <p>Counter value:{value}</p>
      <button onClick={setValueFunc()}>Counter++</button>
      <button >Counter--</button>
    </>
  )
}

export default App
