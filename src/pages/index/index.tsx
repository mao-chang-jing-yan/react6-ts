import React, {Component, Fragment} from 'react';
// import store from "../../store"
import {connect} from "react-redux";
import {constants} from "./store";
import {deT} from "./store/reducer";
// import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
// import {CreateChangeAction} from "../../store/actionCreators";
// import {we} from "../../store/actionCreators";

// import axios from "axios";
// axios.get("http://127.0.0.1:8002/").then(res => {
//     console.log(res)
// }).catch(err => {
//     // alert(err)
// })

interface IProps {
    user: deT,
    set(): void,
}

class Index extends Component<IProps> {
    cancelSub = () => {
        console.log(this.props.user.name)
    };

    // constructor(props) {
    //     super(props);
    // this.state = store.getState();
    // // globalData.baseURL = 12
    // console.log(globalData)

    // }

    // componentDidMount() {
    //     //订阅模式
    //     this.cancelSub = store.subscribe(() => {
    //         this.setState(store.getState());
    //     });
    //     // const w = we()
    //     // store.dispatch(w)
    //
    // }
    // componentWillUnmount() {
    //     this.cancelSub();
    // }


    render() {
        return (

            <Fragment>
                23123
                <div onClick={() => this.props.set()}>
                    1234
                </div>
            </Fragment>
        );
    }

    // set() {
    //     const action = {
    //         type: 123,
    //         value: "wefdsf"
    //     }
    //     store.dispatch(action)
    //
    //
    // }


    storeChange() {
        // this.setState(store.getState())
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user.toJS(),
        // id: state.
    }
}
const mapDispatchToProp = (dispatch: any) => {
    return {
        set() {
            // const action = CreateChangeAction()
            // dispatch(action)
            // console.log("234")
            dispatch({
                type: constants.GET_LIST_DATA,
                value: 1,
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Index);

