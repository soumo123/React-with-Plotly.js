
// import {Actiontypes} from '../constants/action-type'

// const inistialstate= {
//     products:[
//         {
//             id:1,
//             title:"Soummya",
//             category:"develeoprs"
//         }
//     ]
// }

// export const productreducer =(state=inistialstate,{type,payload})=>{

// switch (type) {
//     case Actiontypes.SET_PRODUCTS:
//         return state
//     default:
//         return {
//             message:"not state"
//         };
// }

// }
import {setproducts} from '../actions/productAction'
const initialstate= {
    products:[]
}

export const productreducer = (state=initialstate,action:any)=>{
console.log(setproducts(action).type)
    switch(setproducts(action).type){
        case "SET_PRODUCTS" :return {...state, products:action.payload};
        default :return {
            messqage:"not state"
        }
    }


}
