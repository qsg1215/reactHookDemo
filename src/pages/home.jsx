import React, { Component } from "react";
import './home.css'
let i = 0;
var thunkify = require('thunkify');


class TexClass extends Component {

  state = {
    hello: '12'
  }

  componentDidMount() {

    var myIterable = {};
    myIterable[Symbol.iterator] = function* () {
      yield 1;
      yield 2;
      yield 3;
    };

    let ss = [...myIterable] // [1, 2, 3]
    console.log(ss)



  }



  render() {
    return <div>
      这是一个测试文件
    </div>
  }
}


export default class Home extends Component {



  postData = () => {
    i++
    // 发送数据
    let msg = JSON.stringify({
      name: 'chen' + i,
      sex: 'male'
    })
    // window.postMessage(msg);`
    var data = { type: 'answerResult', data: msg };
    let iframes = document.getElementsByClassName('iframe')
    iframes[0].contentWindow.postMessage(data, '*');





  }
  componentDidMount() {

    //setInterval(() => { this.postData() }, 1000)







  }
  render() {
    return <div id="map">
      <TexClass></TexClass>
      <iframe className="iframe" style={{ height: '300px', width: '800px' }} src="http://localhost:8000"></iframe>
    </div>
  }



}
