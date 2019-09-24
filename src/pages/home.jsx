import React, { Component } from "react";
import './home.css'
import { data } from './dataBase/road1.js'
const { BMap } = window;


export default class Home extends Component {
  componentDidMount() {
    let BmapK = new BMap.Map("map", { enableMapClick: false });
    BmapK.centerAndZoom(new BMap.Point(103.26462, 29.762742), 13);
    BmapK.enableScrollWheelZoom(false);


    let pointList = [];
    pointList = data.map(item => new BMap.Point(item.longitude, item.latitude))
    var polyline = new BMap.Polyline(pointList,
      { strokeColor: "blue", strokeWeight: 6, strokeOpacity: 0.5 }
    );
    BmapK.addOverlay(polyline);
  }
  render() {
    return <div id="map">
      测试案例1234
      </div>
  }



}
