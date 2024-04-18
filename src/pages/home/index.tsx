import NavigationBar from '../../components/NavigationBar'
import { Hero } from './Hero'
import { BannerGrid } from './BannerGrid'
import { ProductCarrousel } from '../../components/ProductCarrousel'
import { Values } from './Values'
import { SaleBanner } from './SaleBanner'
import { Footer } from '../../components/Footer'
import { useState } from 'react'

function Home() { 
  const [isCartBarOpen, setIsCartBarOpen] = useState(false)
  
  const toggleCartBar = () => {
    setIsCartBarOpen(!isCartBarOpen)
  }
  

  return (
    <div className=' bg-white text-gray-700 relative '>
      
        <NavigationBar open={toggleCartBar} cartBar={isCartBarOpen} />

        <Hero/>
        <BannerGrid/>
        <ProductCarrousel tag={<div>Frequently<br/> Imported</div> }/>
        <Values/>
        <SaleBanner/>
        {/* <Blog/> */}
        {/* <Newsletter/> */}
        <Footer/>
    </div>
  )
}

export default Home