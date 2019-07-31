import React from "react";

export default class EmptyLayout extends React.Component {
  render() {
    return (
      <div>
        <h1>布局容器title</h1>
        {this.props.children}
      </div>
    );
  }
}
