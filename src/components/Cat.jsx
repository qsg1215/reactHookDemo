import React from "react";
export default class Cat extends React.Component {
  render() {
    return <div>测试{this.props.target}</div>;
  }
}
