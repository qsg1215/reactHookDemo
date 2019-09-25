import React, { Component } from "react";
import './home.css'



export default class Home extends Component {
  componentDidMount() {
    class Sleep {
      constructor(timeout) {
        this.timeout = timeout;
      }
      then(resolve, reject) {
        const startTime = Date.now();
        setTimeout(
          () => resolve(Date.now() - startTime),
          this.timeout
        );
      }
    }

    (async () => {
      const sleepTime = await new Sleep(3000);
      console.log(sleepTime);
    })();
  }
  render() {
    return <div id="map" onClick={event => { console.log(event) }}    >

    <input onChange={event => { console.log(event) }}  />
      测试案例1234
      </div>
  }



}
