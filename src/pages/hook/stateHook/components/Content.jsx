import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ThemeSwitch from './ThemeSwitch'
// import Connect from './Connect.jsx';
import { connect as Connect } from 'react-redux'
class Content extends Component {
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
    //     const state = store.getState()
    //     this.setState({ themeColor: state.themeColor })
    // }

    render() {
        return (
            <div>
                <p style={{ color: this.props.themeColor }}>React.js 小书内容</p>
                <ThemeSwitch />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      themeColor: state.themeColor
    }
  }
  const warppedContent = Connect(mapStateToProps)(Content)

export default warppedContent