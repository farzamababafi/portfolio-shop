import styles from '../styles/cart.module.css'
import {useSelector} from "react-redux";
import { useState , useEffect} from 'react';
function Cart(){
    const products = useSelector(state=>state.productSlice)
    const [totalPrice,setTotalPrice]=useState(0)
    useEffect(()=>{
        setTotalPrice(0);
        products.map((product)=>{
            setTotalPrice(preveTotal=>preveTotal+(product.price*product.count))
            })
    },[products])

    return(
        <div className={styles.container}>
            {products.map((product)=>{
                return(
                    <div key={product.id} className={styles.productContainer}>
                        <div className={styles.imgContainer}>
                            <img src={product.image} alt="" />
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.productInfo}>
                                <div>
                                     <h2>{product.name} </h2>
                                     <h3>brand: {product.brand}</h3>
                                </div>
                                <h4>product code: {product.id}</h4>
                         
                            </div>
                            <div className={styles.productPrice}>
                                <p>price: ${product.price}</p>
                                <p>count:  {product.count}</p>
                            </div>
               
                        </div>
               
        
    
                    </div>
                    )
            })}
            {totalPrice>0?<div className={styles.buyContainer}><h1>total price: ${totalPrice}</h1><button>buy</button></div>:null}
        </div>
    )

}
export default Cart;