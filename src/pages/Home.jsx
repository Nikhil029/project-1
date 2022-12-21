import React from 'react'
import Announcement from '../components/Announcement'
import Footer from "../components/Footer";
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Newsletter from "../components/Newsletter";
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
    <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home
