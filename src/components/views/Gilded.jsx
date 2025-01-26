import React from 'react'
import Hero from '../gilded/Hero'
import NftUtility from '../gilded/NftUtility'
import GamingPlatForm from '../gilded/GamingPlatForm'
import PlayToEarn from '../gilded/PlayToEarn'
import GildToken from '../gilded/GildToken'
import Roadmap from '../gilded/Roadmap'
import BuyUniswap from '../gilded/BuyUniswap'
import PoweredBy from '../gilded/PoweredBy'
import BackToTop from '../../common/BackToTop'

const Gilded = () => {
  return (
    <>
      <Hero />
      <NftUtility />
      <PlayToEarn/>
      <GamingPlatForm/>
      <GildToken />
      <Roadmap />
      <BuyUniswap />
      <PoweredBy />
      <BackToTop/>
        </>
  )
}

export default Gilded