import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import Head from "next/head";

import SideNav from "~/components/SideNav";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>

      <Head>
        <title>Next.js + tRPC + NextAuth.js</title>
        <meta name="description" content="By JoseLuis Gomez Cecena." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="container mx-auto flex">
        <SideNav />

        <div className="min-h-screen flex-grow border-x">
          <Component {...pageProps} />
        </div>
        
      </div>

    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
