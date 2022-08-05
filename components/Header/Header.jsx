import { useEffect , useState, useCallback} from "react"
import Link  from "next/link"
import { useRouter } from 'next/router'
import { useSelector } from "react-redux"

import {FaCartPlus}from 'react-icons/fa'
import {DiCssdeck} from 'react-icons/di'
import {HiMenu}  from 'react-icons/hi'
import {TiTimes} from 'react-icons/ti'
import styles from './Header.module.css'

function Header(){
    const productList=useSelector(state=>state.productSlice)
    const router = useRouter()
    const[windowWithd,setWindowWithd]= useState();
    const[isBiger,setIsBiger]= useState();
    const[isVisible,setIsVisible]=useState(false);
    const[activeMenu,setActiveMenu]=useState(0)

    useEffect(()=>{
        setWindowWithd(window.innerWidth);
        if(windowWithd<510) {setIsBiger(true);}
        if(windowWithd>=510) {setIsBiger(false);}
        if(router.asPath=="/") {setActiveMenu(1)}
        if(router.asPath=="/products") {setActiveMenu(2)}
    },[])
    useEffect(()=>{
        function getWithd(){
            setWindowWithd(window.innerWidth);
        }
        window.addEventListener('resize',getWithd)
        if(windowWithd<510) {setIsBiger(true);}
        if(windowWithd>=510) {setIsBiger(false);}

    },[windowWithd])
 
    return(
        <div className={styles.container}>
           {isBiger?
            <div className={isVisible?`${styles.sidebar} ${styles.active}`:styles.sidebar}>
                <div  onClick={()=>{setIsVisible(false)}} className={styles.exit}><TiTimes/></div>
                <div>
                    <li>
                        <Link href="/">
                            <p onClick={()=>{setIsVisible(false); setActiveMenu(1)}} >Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products">
                            <p onClick={()=>{setIsVisible(false); setActiveMenu(2)}} >Products</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <p  onClick={()=>{setIsVisible(false); setActiveMenu(3)}} >Technogies</p>
                        </Link>
                    </li>
                    <li>
                        <Link href=''>
                            <p onClick={()=>{setIsVisible(false); setActiveMenu(4)}} >About</p>
                        </Link>
                    </li>
                </div>
            </div>:null}
            <div className={activeMenu==1?`${styles.logoContainer} ${styles.active}`: styles.logoContainer}>
                <Link href="/">
                    <p onClick={()=>{setActiveMenu(1)}}>
                        <DiCssdeck size="2rem"/>
                        <span>Portfolio</span>
                    </p>
                </Link>
                </div>
            {isBiger?null:
            <ul>
                <li className={activeMenu==2?`${styles.active}`:""}>
                    <Link href="/products">
                        <p onClick={()=>{setActiveMenu(2)}}>Products</p>
                    </Link>
                </li>
                <li className={activeMenu==3?`${styles.active}`:""}>
                    <Link href="">
                        <p onClick={()=>{setActiveMenu(3)}}>Technogies</p>
                    </Link>
                </li>
                <li className={activeMenu==4?`${styles.active}`:""}>
                    <Link  href=''>
                            <p onClick={()=>{setActiveMenu(4)}} >About</p>
                     </Link>
                </li>
            </ul>}
            <div className={styles.imgContainer}>
                <div  onClick={()=>{setActiveMenu(5)}} className={activeMenu==5?`${styles.active}`:""} >
                    <Link href="/cart" ><div><FaCartPlus /></div></Link>
                    {productList.length>0?<p className={styles.productNumber}>{productList.length<9?productList.length:`${productList.length}+`}</p>:null}
                    </div> 
                {
                    isBiger  ? <div  onClick={()=>{setIsVisible(true)}}><HiMenu /></div> :null
                }
               

            </div>
        </div>
    )
}
export default Header