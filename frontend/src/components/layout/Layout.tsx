import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }){
  return (
    <div style={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
      <Header />
      <main style={{flex:1, padding:16}}>{children}</main>
      <Footer />
    </div>
  )
}
