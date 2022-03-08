import React,{useEffect} from 'react'
import axios from 'axios'
import {setproducts} from '../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux'



const Productcomponent =  () => {
    const products = useSelector((state:any)=>state.allProducts.products)
    const dispatch = useDispatch()
    // console.log(products)

const fetchproducts =async()=>{
let newdata:any = [] //this array i used cz when i get fetchdata its basically a object . So i have to update it array of object .
    const fetchdata = await axios.get("http://localhost:5000/data/plotgenerate").catch((err)=>{
      console.log("Not fetching data", err)
    })
    newdata = fetchdata
    console.log(typeof(newdata))// array of object now it is
    dispatch(setproducts(newdata.data))

}
useEffect(()=>{
  fetchproducts()
},[])
console.log(products,"getting products by redux")
console.log(products)

  return (
    <>
   

    </>
  )
}

export default Productcomponent