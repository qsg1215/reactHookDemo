import React from "react";
export default class Cat extends React.Component {
  render() {
    console.log(this.props);
    return <div>这里是子组件{this.props.target}</div>;
  }
}
