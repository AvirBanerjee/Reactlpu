import { useState } from 'react'



function App() {
  const[password,setPassword]=useState("")
  const[lenght,setLenght]=useState(10)

  const[isNumberUsed,setIsnumberUsed]=useState(true)
  const[isSpecialCharUsed,setIsSpecialCharUsed]=useState(true)
  const[isUpperCaseUsed,setIsUpperCaseUsed]=useState(true)

  const genretatePassword=()=>{
    let str="abcdefghijklmnopqrstuvwxyz"
    let pass=""

    if(isNumberUsed)str+="0123456789"
    if(isSpecialCharUsed)str+="!@#$%^&*"
    if(isUpperCaseUsed)str+"ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘǫʀꜱᴛᴜᴠᴡxʏᴢ"

    for(let i=0;i<lenght;i++){
      let random=Math.floor(Math.random()*str.length)
      pass+=str[random]
    }
    setPassword(pass)
    
  }
  genretatePassword()
  console.log(password);
  

  return (
    <>
      
    </>
  )
}

export default App
