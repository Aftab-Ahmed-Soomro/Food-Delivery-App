import { footerList, iconsList } from "../../utils/constants/Footer"
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      {
        footerList.map((section, index) => (
          <div className="footerDiv" key={index}>
            <h3>{section.title}</h3>
            <ul>
              {
                section.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))
              }
            </ul>
          </div>
        ))
      }
      {
        iconsList.map((item, index)=> {
          return (
          <i key={index} className={item.icon}></i>
          )
        })
      }
    </div>
  )
}

export default Footer

// import { footerList } from "../../utils/constants/footer"
// import './footer.css'

// const Footer = () => {
//   return (
//     <div>
//       {
//         footerList.map((item, index) => (
//           <div className="footerDiv" key={index}>
//             <ul>
//               <h4>{item.title}</h4>
//               <li>{item.child1}</li>
//               <li>{item.child2}</li>
//               <li>{item.child3}</li>
//               <li>{item.child4}</li>
//             </ul>
//           </div>
//         ))
//       }
//     </div>
//   )
// }

// export default Footer
