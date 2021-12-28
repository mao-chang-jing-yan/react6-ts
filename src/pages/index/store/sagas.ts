import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {actionCreators, constants} from "./index";
// import {httpService, api} from "../../../serveice";


function* getListData(action: {type: string, value: any}) {
    try {
        // const data = yield httpService.GET(
        //     "http://47.100.82.173:8002/api/v1/images/get",
        //     {id: 1,tr: "123"});
        // const data = yield httpService.GET("https://www.baidu.com");
        // const data = yield httpService.GET(api.getTest, {id1: 23});
        // let data = yield httpService.POST(api.geD(12), {id1: 23}, {});
        // data = yield httpService.GET(api.geD(12), {id1: 23});
        // console.log("data", data)
        yield console.log("data", 0)
        // yield put(actionCreators.changeListData(data));
    } catch (e) {
        console.log(123)
    }
}

function* mySaga() {
    yield takeEvery(constants.GET_LIST_DATA, getListData);
}

export default mySaga;
