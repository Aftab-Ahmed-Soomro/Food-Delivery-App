import { contactList } from "../../utils/constants/Contact";
import Button from "../Common/Button/Button"
import './Contact.css'

const Contact = ({data}) => {
  const {title, subTitle} = data;
  return (
    <div className="contact-wrapper">
      <div>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
      <div>
        <ul>
        {
          contactList.map((item, index)=> {
            return (
              <li key = {index}> {item.spanText} <a href={item.text}>{item.text}</a></li>
            )
          })
        }
        </ul>
      </div>
      <div>
      <Button btnTitle={"Contact Us"} />
      </div>
    </div>
  )
}

export default Contact
