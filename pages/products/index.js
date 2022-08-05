import styles from "../../styles/products.module.css"
import ProductCart from "../../components/products/ProductCart"
import {useState } from 'react'
function Products(props){
    const[activeBrand,setActiveBrand]=useState(-1)
    const[product, setProduct]= useState(props.product);
    const fetchBrands= async(brand) => {
        const res = await fetch(`http://localhost:4000/products?brand=${brand}`)
        const data = await res.json()
        setProduct(data);
    }
    if(!product) { return <h1 className={styles.error}>please wait...</h1>}
    
    return (
    <div className={styles.container}>
        <div className={styles.filterContainer}>
            <ul>
                <h3 className={activeBrand==-1?styles.active:null} onClick={()=>{setProduct(props.product);setActiveBrand(-1)}}>brands</h3>
                {props.brands?
                props.brands.map((brand,index)=>{
                    return <li className={activeBrand==index?styles.active:null} key={index} onClick={()=>{fetchBrands(brand);setActiveBrand(index)}}>{brand}</li>
                })
                :
                <h3 className={styles.error}>Please Waite ...</h3>
                } 
            </ul>
        </div>
        {
            product?
        <div className={styles.products}>
            {product.map((p)=>{
                return(
                    <ProductCart brand={p.brand} id={p.id} key={p.id} name={p.name} price={p.price} image={p.img}/>
                )
            })}
        </div>
        :
        <h1 className={styles.error}>Please Waite ...</h1>
    }
    </div>
    )
}
export default Products
export async function getServerSideProps(){
    let data 
    let brands
    try {
    const response = await fetch("http://localhost:4000/products")
    data = await response.json()
    brands =[...new Set(data.map((d)=>{
        return d.brand
     })
    )] 
    }
    catch(err){
        data=null
        brands=null
    }


    return{
        props:{product : data,
               brands}
    }
}