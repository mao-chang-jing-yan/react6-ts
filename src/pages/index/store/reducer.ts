import {Collection, fromJS} from "immutable";
import * as constants from "./actionTypes";

// Collection<any, any> defaultType
export interface deT {
    name: string
}

const defaultState = {
    name: "13",
}

const fj = (defaultState: deT) => {
  return fromJS(defaultState)
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = fj(defaultState), action: { type: string, value: any }) => {
    const newState = JSON.parse(JSON.stringify(state))

    switch (action.type) {


        // case constants.CHANGE_SEARCH_PARAMS:
        //     const searchParams = state.get("searchParams").toJS()
        //     searchParams[action.value.key] =  action.value.value
        //
        //     return state.set("searchParams", fromJS(searchParams))

        default:
            break
    }

    return state
}
