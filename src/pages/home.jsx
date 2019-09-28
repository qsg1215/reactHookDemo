import React, { Component } from "react";
import './home.css'
let i = 0;


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
      <iframe className="iframe" style={{ height: '300px', width: '800px' }} src="http://localhost:8000"></iframe>
    </div>
  }



}
