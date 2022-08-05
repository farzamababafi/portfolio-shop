import style from './About.module.css'
import {useState , useRef} from 'react'

import {FiChevronRight,FiChevronLeft} from 'react-icons/fi'
function About(){
  
    const scrollerRef=useRef();
   const[isDown,setIsDown]=useState(false);
    const[startX,setStartX]=useState();
    const[scrollLeft,setScrollLeft]=useState();
    function handleMove(e){
        if(!isDown){return;}
        e.preventDefault();
        const x = e.pageX - scrollerRef.current.offsetLeft
        const walk = (x - startX);
        scrollerRef.current.scrollLeft = scrollLeft -  walk  
    }
   function handleDown(e){
        setIsDown(true );
        setStartX(e.pageX - scrollerRef.current.offsetLeft)
        setScrollLeft( scrollerRef.current.scrollLeft);
    }

    
    return(
        <div className={style.aboutContainer} >
            <div className={style.textContainer}>
            <h1>About Me</h1>
            <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type</p>
                </div>
            <div ref={scrollerRef}/* onMouseDown={(e)=>handleDown(e)} onMouseUp={()=>setIsDown(false)} onMouseLeave={()=>setIsDown(false)} onMouseMove={(e)=>handleMove(e)}*/ className={style.scroller}>
               <div><img src="css-logo.png" alt="" /></div>
                <div><img src="javascript_logo.png" alt="" /></div>
                <div><img src="react-logo.png" alt="" /></div>
                <div><img src="next-logo.png" alt="" /></div>
                <div><img src="sql-logo.png" alt="" /></div>
            </div>
            <div className={style.btnContainer}>
                <button onClick={()=>window.innerWidth<1200?scrollerRef.current.scrollLeft = scrollerRef.current.scrollLeft -300: scrollerRef.current.scrollLeft = scrollerRef.current.scrollLeft -400}><FiChevronLeft/></button>
                <button onClick={()=>window.innerWidth<1200?scrollerRef.current.scrollLeft = scrollerRef.current.scrollLeft +300:  scrollerRef.current.scrollLeft = scrollerRef.current.scrollLeft +400}><FiChevronRight/></button>
       
            </div>
        </div>
    )

}
export default About;