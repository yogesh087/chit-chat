import React, { useState } from 'react';
 import { useNavigate } from 'react-router-dom';

export default function Home() {
   const[value,setvalue]=useState();
    const navigate=useNavigate();
     const handleClick=()=>{
      navigate(`/room/${value}`)

     }
  return (
    <div>
     <input type="text"
     placeholder='enter the romm id'
     onChange={(e)=>setvalue(e.target.value)}/>
      <button onClick={handleClick}>join</button>
      
    </div>
  );
}
