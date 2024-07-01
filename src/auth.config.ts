// import { signInEmailPassword } from '@/auth/actions';
// import prisma from '@/lib/prisma';
// import { PrismaAdapter } from '@auth/prisma-adapter';
// import NextAuth, { NextAuthOptions } from 'next-auth';
// // import NextAuth, { type NextAuthConfig } from 'next-auth';
// import { Adapter } from 'next-auth/adapters';
// import Credentials from 'next-auth/providers/credentials';

// import CredentialsProvider from "next-auth/providers/credentials";



// export const authConfig: NextAuthConfig  = {
//   pages: {
//     signIn: '/auth/inicio/sesion',
//   },
//   adapter: PrismaAdapter( prisma ) as Adapter,
//   providers: [

//     // GoogleProvider({
//     //   clientId: process.env.GOOGLE_CLIENT_ID ?? '',
//     //   clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
//     // }),

//     // GithubProvider({
//     //   clientId: process.env.GITHUB_ID ?? '',
//     //   clientSecret: process.env.GITHUB_SECRET ?? '',
//     // }),


//     Credentials({
//       async authorize(credentials, req) {
//         // Add logic here to look up the user from the credentials supplied
//         const user = await signInEmailPassword(credentials!.email, credentials!.password );
  
//         if (user) {
//           // Any object returned will be saved in `user` property of the JWT
//           return user;
//         } 

//         return null;
//       }
//     }),

//   ],

//   session: {
//     strategy: 'jwt'
//   },

//   callbacks: {

//     async authorized({ auth, request: { nextUrl } }) {
//       console.log({ auth });
//       // const isLoggedIn = !!auth?.user;

//       // const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
//       // if (isOnDashboard) {
//       //   if (isLoggedIn) return true;
//       //   return false; // Redirect unauthenticated users to login page
//       // } else if (isLoggedIn) {
//       //   return Response.redirect(new URL('/dashboard', nextUrl));
//       // }
//       return true;
//     },

//     async signIn({ user, account, profile, email, credentials }) {
//       // console.log({user});
//       return true;
//     },

//     async jwt({ token, user, account, profile }) {
//       // console.log({ token });
//       const dbUser = await prisma.user.findUnique({ where: { email: token.email ?? 'no-email' } });
//       if ( dbUser?.isActive === false ) {
//         throw Error('Usuario no está activo');
//       }

//       token.id    = dbUser?.id ?? 'no-uuid';

//       return token;
//     },

//     async session({ session, token, user }) {
      
//       if ( session && session.user ) {
//         session.user.id = token.id;

//       }

//       return session;
//     }

//   }

// }



// export const {  signIn, signOut, auth, handlers } = NextAuth( authConfig );