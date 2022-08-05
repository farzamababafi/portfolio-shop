import style from "../Footer/Footer.module.css"
import {BsArrowUpShort} from 'react-icons/bs'
import{Link} from "react-scroll"
function Footer (){
    return(
        <div className={style.container}>
         <h1>Farzam Ababafi</h1>
         <Link to="Header_container__nEsGl"
                smooth={true}
          className={style.arrowContainer}>
              <BsArrowUpShort /></Link>

         </div>
    )
}
export default Footer;