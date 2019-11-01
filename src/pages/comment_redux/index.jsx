import React,{Component} from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import commentsReducer from './reducers/comments'
import './index.css'

const store = createStore(commentsReducer)

class CommentApp1 extends Component {
    
    render() {
        return <div >
      <Provider store={store}>
        <CommentApp />
      </Provider>
        </div>
     
    }
 }

 export default CommentApp1
