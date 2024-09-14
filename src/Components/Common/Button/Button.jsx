import './Button.css'
import {ButtonImages} from '../../../utils/constants/images.js'

const Button = ({btnTitle, isImage, img1, img2}) => {
  // const {appleIcon} = ButtonImages;
  return (
    <div>
      {/* <button>{isImage ? <img src={appleIcon} alt="" /> : null } {btnTitle}</button> */}
      <button>{isImage && <img src={img1} alt="" />} {btnTitle}</button>
    </div>
  )
}

export default Button
