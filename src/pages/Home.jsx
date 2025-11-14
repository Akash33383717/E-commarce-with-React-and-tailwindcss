import React from 'react'
import HomeHero from '../component/HomeHero'
import Featured from '../component/Featured'
import Card3 from '../component/Card3'
import Products from '../component/Products'
import Offers from '../component/Offers'
const Home = () => {
  
  return (
    <div>
      <div>
        <HomeHero></HomeHero>
        <div>
          <div className='container mx-auto py-5 text-2xl md:text-4xl'>
            <h1>Featured Categories</h1>
          </div>
          <div>
            <Featured></Featured>
          </div>
        </div>
        <Card3></Card3>
        <Products></Products>
        <Offers></Offers>
      </div>
    </div>
  )
}

export default Home
