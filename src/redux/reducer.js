//包含多个用于生成新的state的reducers函数的模块
import {combineReducers} from 'redux'
function main(state='',action) {
    return state;
}
function login(state=[],action) {
    return state;
}
function register(state='',action) {
    return state;
}
//返回和后的reducers对象
export default combineReducers({
    main,
    register,
    login

})
