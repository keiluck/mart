import React from 'react'
import Navbar from '../../../components/home/Navbar'


export default function MartLayout({ children }: { children: React.ReactNode }) {
  return <>{children}
   <Navbar />
  </>;
}
