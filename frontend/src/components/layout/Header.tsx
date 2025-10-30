import React from 'react'

export default function Header(){
  return (
    <header style={{padding:12, borderBottom:'1px solid #eee', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
      <div><strong>AAD AgGrid App</strong></div>
      <nav>
        <a href="/" style={{marginRight:12}}>Home</a>
        <a href="/dashboard">Dashboard</a>
      </nav>
    </header>
  )
}
