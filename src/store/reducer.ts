import {combineReducers} from 'redux-immutable';
import {reducer as indexReducer} from "../pages/index/store"
// import {reducer as homeReducer} from "../pages/home1/store";
// import {reducer as webDeviceReducer} from "../pages/home1/webdevice/store"
// import {reducer as supplierReducer} from "../pages/home1/supplier/store"


const reducer  = combineReducers({
    index: indexReducer,
    // home: homeReducer,
    // webDevice:webDeviceReducer,
    // supplier: supplierReducer,
})

export default reducer
