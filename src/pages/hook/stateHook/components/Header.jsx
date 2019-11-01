import React, { Component } from 'react'
import PropTypes from 'prop-types';
// import Connect from './Connect.jsx';
import { connect as Connect } from 'react-redux'

class Header extends Component {
    static propTypes = {
        themeColor: PropTypes.string
      }
    // static contextTypes = {
    //     store: PropTypes.object
    // }

    // constructor() {
    //     super()
    //     this.state = { themeColor: '' }
    // }

    // componentWillMount() {
    //     const { store } = this.context
    //     this._updateThemeColor()
    //     store.subscribe(() => this._updateThemeColor())
    // }

    // _updateThemeColor() {

    //     const { store } = this.context
    //     const state = store.getState();
    //     this.setState({ themeColor: state.themeColor })
    // }


    render() {
        return (
            // <h1 style={{ color: this.state.themeColor }}>React.js 小书</h1>
            <h1 style={{ color: this.props.themeColor }}>React.js 小书{this.props.name} </h1>
        )
    }
}

const mapStateToProps = (state, props ) => {
    return {
        themeColor: state.themeColor,
        ...props
    }
  }
const  WarpedHeader = Connect(mapStateToProps)(Header)

export default WarpedHeader