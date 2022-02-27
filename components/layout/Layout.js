import Head from "next/head";
import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>KTISAKIB</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='  dark:text-white text-black dark:bg-slate-900'>
        <Header /> {children} <Footer />
      </div>
    </div>
  );
};

export default Layout;
