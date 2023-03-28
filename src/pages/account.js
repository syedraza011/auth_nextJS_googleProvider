import React from 'react'
import {useSession, signOut} from "next-auth/react"
export default function account() {
    const {data: session}=useSession({required: true})
  return (
    <div>

<p>Gelo</p>
        
    </div>
  )
}
