// import {Actiontypes} from '../constants/action-type'

// export const setproducts = (products)=>{

// return {
//     type: Actiontypes.SET_PRODUCTS,
//     payload: products
// }

// }

export const setproducts = (products:any)=>{
    return {
        type:"SET_PRODUCTS",
        payload:products
    }
}