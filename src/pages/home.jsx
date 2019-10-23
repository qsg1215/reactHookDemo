import React, { Component } from "react";

import { Table } from 'antd'
import _ from 'lodash';
import './home.css'
// import data from '../data.js'
export default class Home extends Component {
  componentDidMount() {
    let object = {
      name: 'chen'
    }
    let source = {
      name: 'wang',
      age: 12,
      address: 'cd'
    }
    let customizer = (a, b, c, d, e, f) => {
      console.log(a)
      console.log(b)
      console.log(c)
      console.log(d)
      console.log(e)
      console.log(f)
    }


    let ss = _.assignInWith(object, source, customizer);
    // console.log(ss)

    // => true   .conformsTo(object, { 'b': function(n) { return n > 2; } }); // => false // => 'hello fred'   // 使用了占位符。 var greetFred = .partial(greet, , 'fred'); greetFred('hi'); // => 'hi fred' // => [1, 2]   values(other); // => [3, 4]   object.a = 2; values(object); // => [1, 2]   // 修改结果缓存。 values.cache.set(object, ['a', 'b']); values(object); // => ['a', 'b']   // 替换 _.memoize.Cache。 .memoize.Cache = WeakMap;

  }
  render() {


    return <div id="map">
      hello
    </div >
  }



}
