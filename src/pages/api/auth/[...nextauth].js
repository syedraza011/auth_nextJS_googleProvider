import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google'
export default NextAuth({

    providers:[
        GoogleProvider({
        clinetId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE-CLIENT-SECRET,
    })]

})


