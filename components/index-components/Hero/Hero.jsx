import style from './Hero.module.css'
function Hero(){
    return(
        <div className={style.container}>
            <div ><h1>Welcome To<br/> My Personal Portfolio</h1></div>
            <div className={style.content}>
                <p>The purpose of javascript mastery is to help aspiring
                 and established developers to take dair development skills
                 </p>
            </div>
            <div><button>Learn More</button></div>
        </div>
    )

}
export default Hero;