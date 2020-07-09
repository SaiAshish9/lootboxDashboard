import {combineReducers} from 'redux'
import productReducer from './reducers/product-reducer'
import { persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["product"],
};

export const rootReducer=combineReducers({
    product:productReducer
})

export default persistReducer(persistConfig,rootReducer)