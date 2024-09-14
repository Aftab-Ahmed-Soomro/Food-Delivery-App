import './Card.css'
const Card = ({data}) => {
  const {title, imgUrl, subTitle} = data;
  return (
    <div className="card-banner">
      <h3>{title}</h3>
      <img src={imgUrl} alt="" />
      <p>{subTitle}</p>
      <a href="">Learn more</a>
    </div>
  )
}

export default Card
