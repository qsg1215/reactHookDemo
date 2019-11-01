
import { themeReducer } from '../reducer/index.js';
import { createStore } from 'redux'
// function createStore(reducer) {
//     let state = null
//     const listeners = []
//     const subscribe = (listener) => listeners.push(listener)
//     const getState = () => state
//     const dispatch = (action) => {
//       state = reducer(state, action)
//       listeners.forEach((listener) => listener())
//     }
//     dispatch({}) // 初始化 state
//     return { getState, dispatch, subscribe }
// }
  
const store = createStore(themeReducer);
  
export default store