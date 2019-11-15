import React, { Component } from 'react';
import { Button } from 'antd';

const MyContainer = (WrappedComponent) => class extends WrappedComponent {
  componentWillMount() {
    console.log(this.props, this.state);
  }
  render() {
    return <div>
    {super.render()}
  </div>
  }
}

function HOCFactoryFactory(...params) {
  // 可以做一些改变 params 的事 
  return function HOCFactory(WrappedComponent) {
    return class HOC extends Component {
      render() {
        return <WrappedComponent {...this.props} {...params}
        />;
      }
    }
  }
}


class Test extends Component {
  state= { data: '123'}
  method() {
    console.log('调用了')
  }
  render() {
    return <div>
      <h1>{this}</h1>
      hello-123
      </div>
  }
}

export default  HOCFactoryFactory({title:'123'})(Test)

 

 
