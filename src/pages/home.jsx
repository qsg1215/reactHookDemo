import React, { Component } from "react";

import _ from 'lodash';
import './home.css'
export default class Home extends Component {
  componentDidMount() {



    let ss = _.last([1, 2, 3]);
    console.log(ss)
































  }
  render() {
    return <div id="map">
      <iframe src="https://www.30ttq.com/hongyagaomiaozhen/" onLoad={this.handle} ></iframe>
      测试主页
       </div >
  }



}
