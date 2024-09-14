import React from 'react'
import { contactData } from '../utils/constants/Contact'
import Contact from '../Components/Contact/Contact'

const OrderNow = () => {
  return (
    <div>
        <Contact data = {contactData} />
    </div>
  )
}

export default OrderNow