import React from 'react'
import Banner from '../Components/Banner/Banner'
import { BannerText1, BannerText2, BannerText3, BannerText4 } from '../utils/constants/BannerText'

const About = () => {
  return (
    <div>
      <Banner data = {BannerText1} />
      <Banner isrotate data = {BannerText2} />
      <Banner data = {BannerText3} />
      <Banner isrotate data = {BannerText4} />
    </div>
  )
}

export default About
