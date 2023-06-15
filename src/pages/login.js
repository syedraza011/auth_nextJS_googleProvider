import react from 'react'
import { useSession,signIn,signOut } from 'next-auth/react'
const login=()=>{
  useEffect =()=>{
  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: 'example@email.com',
      password: 'example-password',
    })
  }
signInWithEmail();
  }



  const {data: session}=useSession();
  
  if(session){
    return(
<>
<div>
<p>Welcome, {session.user.email}</p>
<img src={session.user.image } alt={session.user.name} style={{borderRadius: '50px'}} />
<button onClick={()=>signOut()}>Sign out</button>
</div>
    </>
    );
} else {
    return (
   <div>
<p>You are not singned in.</p>
<button ></button>
<button onClick={()=>signIn()}>Sign in</button>
        </div>
    );



  }
  
  
  

}

export default login