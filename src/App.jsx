import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar';

const navbarFetch = async () =>{
  const res = await fetch('/Navbar.json');
  return res.json();
}

function App() {
  const navbarFetchh = navbarFetch();
  return (
    <>
     <Suspense fallback={<h1>Loading navbar..</h1>}>
        <Navbar navbarFetch={navbarFetchh}></Navbar>
     </Suspense>
    </>
  )
}

export default App
