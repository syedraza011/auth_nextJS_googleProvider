import React from 'react'
import {useSession, signOut, getSession} from "next-auth/react"
import { Spline_Sans_Mono } from 'next/font/google';


 const account =()=> {
    const {data: session, status}=useSession({required: true})
  
  if(status==='authenticated'){
    return (
      <div>
  
  <p>Welcome {session.user.name}</p>

  <button onClick={()=>signOut()}>signOut</button>
          
      </div>
    );
  } else {
    return (

  <div>
    <p>You are not singned in.</p>
  </div>

    );
  }
 
}
export default account;

export const getServerSideProps= async (context)=>{
  const session= await getSession(context);
  return {
    props:{session}
  }
}