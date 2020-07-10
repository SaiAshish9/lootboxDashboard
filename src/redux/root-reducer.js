import {combineReducers} from 'redux'
import productReducer from './reducers/product-reducer'
import { persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import orderReducer from './reducers/order-reducer'
import categoryReducer from './reducers/category-reducer'
import notificationReducer from './reducers/notification-reducer'

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["product","order"],
};

export const rootReducer=combineReducers({
    product:productReducer,
    order:orderReducer,
    category:categoryReducer,
    notification:notificationReducer
})

export default persistReducer(persistConfig,rootReducer)