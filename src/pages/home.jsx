import React, { Component } from "react";
import './home.css'



export default class Home extends Component {
  spawn(genF) {
    return new Promise(function (resolve, reject) {
      const gen = genF();
      //gen 迭代器
      function step(nextF) {

        let next;
        try {
          next = nextF();
        } catch (e) {
          return reject(e);
        }
        console.log(next)
        if (next.done) {
          return resolve(next.value);
        } else {
          Promise.resolve(next.value).then(function (v) {
            step(function () { return gen.next(v); });
          }, function (e) {
            step(function () { return gen.throw(e); });
          });
        }

      }
      step(function () { return gen.next(); });
    });
  }
  componentDidMount() {
    let ginerateFunc = function* () {
      yield new Promise((reslove, reject) => { setTimeout(() => { reslove('1') }, 3000) })
      yield new Promise((reslove, reject) => { setTimeout(() => { reslove('2') }, 3000) });
      return 12
    }

    let beginTime = +(new Date)

    this.spawn(ginerateFunc).then(res => {
      let endTime = +(new Date)
      console.log(endTime - beginTime)
      console.log(res)
    })



  }
  render() {
    return <div id="map"   >
      123
    </div>
  }



}
