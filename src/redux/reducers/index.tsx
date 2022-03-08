import {combineReducers} from 'redux'
import { productreducer } from './productreducer'

const reducers = combineReducers({
    allProducts:productreducer
})

export default  reducers