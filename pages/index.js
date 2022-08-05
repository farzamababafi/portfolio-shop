import Hero from "../components/index-components/Hero/Hero"
import Techno from "../components/index-components/Techno/Techno"
import About from "../components/index-components/About/About"
import Footer from "../components/index-components/Footer/Footer.jsx"
import style from "../styles/index.module.css"
export default function Home() {
  return (
    <div className={style.container}>
     <Hero/>
     <Techno/>
     <About/>
     <Footer/>
    </div>
  )
}
