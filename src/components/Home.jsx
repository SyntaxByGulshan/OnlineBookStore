import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header'; // Corrected import to match the file name
import Footer from './Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
