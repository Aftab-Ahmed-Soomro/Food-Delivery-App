import React from 'react'
import Card from '../Components/Common/Card/Card'
import { cardData } from '../utils/constants/services'

const Services = () => {
  return (
    <div>
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
    </div>
  )
}

export default Services
