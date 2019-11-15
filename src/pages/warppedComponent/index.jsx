import React, { Component } from "react";
import Test from './components/Test.jsx'
import {Button} from 'antd'

export default class Index extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      visible: true
    }
  }

  toggleVisible() {
    this.setState({ visible: !this.state.visible})
  }

  addCount() {
    this.setState({ count: this.state.count+1})
  }

  render() {
    let { visible } = this.state;
    return <div>
        hello
      <Button  onClick={this.toggleVisible.bind(this)}>切换</Button>
      <Button  onClick={this.addCount.bind(this)}>加次数</Button>
     { visible && <Test count={this.state.count}></Test>}
      </div>
  }
  
}