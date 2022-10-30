import React from 'react'
import About from '../../Components/Frontend/Home/About'
import Banner from '../../Components/Frontend/Home/banner'
import Footer from '../../Components/Frontend/Home/Footer'
import Header from '../../Components/Frontend/Home/Header'
import Hotel from '../../Components/Frontend/Home/Hotel'
import Introduce from '../../Components/Frontend/Home/Introduce'
import Plan from '../../Components/Frontend/Home/Plan'
import Tour from '../../Components/Frontend/Home/Tours'
export default function Home () {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Plan />
      <Tour />
      <Introduce />
      <Hotel />
      <Footer />
    </>
  )
}
