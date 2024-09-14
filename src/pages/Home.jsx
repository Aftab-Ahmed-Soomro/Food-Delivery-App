import React from 'react'
// import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import { BannerText1, BannerText2, BannerText3, BannerText4 } from '../utils/constants/BannerText'
import Card from '../Components/Common/Card/Card'
import './Home.css'
import { cardData } from '../utils/constants/services'
import Contact from '../Components/Contact/Contact'
import { contactData } from '../utils/constants/Contact'
// import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      {/* <Header /> */}
      <Banner data = {BannerText1} />
      <Banner isrotate data = {BannerText2} />
      <Banner data = {BannerText3} />
      <h3 className='heading'>Some Services We Offer</h3>
      <div className="cardss">

        {/* for few cards */}
      {/* <Card data = {cardData[0]}/>
      <Card data = {cardData[1]} />
      <Card data = {cardData[2]} /> */}
      {

        // for many cards
        cardData.map((item, index)=> {
          return (
          <Card key={index} data={item} />
          )
        })
      }
      </div>
      <Banner isrotate data = {BannerText4} />
      <Contact data = {contactData} />
      {/* <Footer /> */}
    </div>
  )
}

export default Home
