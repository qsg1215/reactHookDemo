import React, { Component } from "react";
import Header from './components/Header'
import Content from './components/Content';
import PropTypes from 'prop-types'
// import Provider from './components/Provider.jsx'
import store from './store'

import { Provider } from 'react-redux'



export default class StateHook extends Component {
  render() {
    return (
      <Provider store={store}>
        <div style={{ backgroundColor: '#ccc' }} >
            < Header name="123"></Header>
            <Content></Content>
          </div>
      </Provider>
    
    );
  }
}
