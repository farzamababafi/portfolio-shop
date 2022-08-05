import style from "./Techno.module.css"
function Techno(){
    return(
    <div className={style.container}>
        <div className={style.line}></div>
        <h1 className={style.title}>Technologies</h1>
        <div className={style.techContainer}>
            <div >
                <h2>Front-End</h2>
                <ul>
                    <li>html/css</li>
                    <li>javascript</li>
                    <li>react/redux</li>
                    <li>next.js</li>
                </ul>
            </div>
            <div>
                <h2>Back-End</h2>
                <ul>
                    <li>none</li>
                </ul>
            </div>
        </div>
    </div>
    )
}
export default Techno;