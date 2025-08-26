import React from 'react'
import Heroes from '../components/Heroes'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsLetterBox from '../components/NewsLetterBox'



const Home = () => {
  return (
    <div>
    <Heroes/>
    <LatestCollection/>
    <BestSeller/>
    <OurPolicy/>
    <NewsLetterBox/>
    </div>
  )
}

export default Home
