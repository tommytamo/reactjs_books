import React from 'react'
import Header from '../../components/header/Header'
import { Outlet } from 'react-router-dom';

// An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.

const Home = () => {
  return (
    <main>
      <Header />
        
      <Outlet />
    </main>
  )
}

export default Home