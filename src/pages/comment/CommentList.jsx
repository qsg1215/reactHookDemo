import React, { Component } from 'react';
import Comment from './Comment.jsx'
export default class Index extends Component {
    static defaultProps = {
        comments: []
    }
    render() {
        return <div>
            {this.props.comments.map((comment, i) => <Comment onDeleteComment={this.props.onDeleteComment} comment={comment} key={i} index={i} />)}
        </div>
    }
}