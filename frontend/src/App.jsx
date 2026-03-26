<<<<<<< Updated upstream
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className='bg-[#F5F3EE] min-h-screen'>
      <Navbar />
      <Hero />
    </div>
  )
}
=======
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantDetail from "./pages/RestaurantDetail";
import MenuPage from "./pages/MenuPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurant/:id" element={<RestaurantDetail />} />
      <Route path="/menu" element={<MenuPage />} />
    </Routes>
  );
};
>>>>>>> Stashed changes

export default App
