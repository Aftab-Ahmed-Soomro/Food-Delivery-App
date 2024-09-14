import { ButtonImages } from "../../utils/constants/images";
import Button from "../Common/Button/Button"
import './Banner.css'

const Banner = ({data, isrotate}) => {
  const {title, subTitle, imgUrl, btnText} = data;
  const {appleIcon} = ButtonImages;
  return (
    <div className={`banner-wrapper ${isrotate && 'rotateImg'}`}>
      <div className="text-wrapper">
        <h2>{title}</h2>
        <p>{subTitle}</p>
        {btnText ? <Button isImage img1={appleIcon} btnTitle={btnText} /> : null }
      </div>
      <div className="img-wrapper">
        <img src={imgUrl} alt="" />
      </div>
    </div>
  )
}

export default Banner
