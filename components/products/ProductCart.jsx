import { useEffect, useState  } from "react";
import { useDispatch , useSelector} from "react-redux";
import { addProduct , incCount , decCount, delProduct} from "../../redux/slices/productSlice";
import styles from "./ProductCart.module.css"
function ProductCart(props){
    const productList=useSelector(state=>state.productSlice)
    const dispatch = useDispatch();
    const[isVisible,setIsVisible]=useState(false)
    const[count,setCount]=useState(0)
    function handleMainBtn(){
        setIsVisible(true);
        setCount(1)
        dispatch(addProduct({
            id: props.id,
            count : 1,
            name: props.name,
            price: props.price,
            image: props.image,
            brand: props.brand
        }))
    }
    function handleminusBtn(){
        if(count>1){
            setCount(count-1)
            dispatch(decCount({
                id: props.id
            }))
            
        }
       else{
           setCount(count-1);
           setIsVisible(false)
           dispatch(delProduct({
            id: props.id
        }))
       }
    }
    function handleplusBtn(){
        setCount(count+1)
        dispatch(incCount({
            id: props.id
        }))
    }
    useEffect(()=>{
        const idList=productList.map(product=>product.id)
        if(idList.find((id)=>id==props.id)){
            setCount(productList[idList.findIndex((id)=>id==props.id)].count)
            setIsVisible(true)
        }
    
    },[productList])
    
    return(
        <div className={styles.container}>
            <p className={styles.name}>{props.name}</p>
            <div className={styles.imgContainer}>
                <img src={props.image} alt="" />
           
            </div>
            <div className={styles.buyContainer}>
                <p className={styles.price}>${props.price}</p>
                <div className={styles.btnContainer}>
                    <button onClick={handleminusBtn} className={isVisible?`${styles.minusBtn} ${styles.active}`:styles.minusBtn}>-</button>
                    <button value={count}onClick={count>0?null:handleMainBtn} className={styles.mainBtn}>{count>0?count:"Add To Cart"}</button>
                    <button onClick={handleplusBtn} className={isVisible?`${styles.plusBtn} ${styles.active}`:styles.plusBtn}>+</button>
                </div>
            </div>

        </div>
    )
}
export default ProductCart;