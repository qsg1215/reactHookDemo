import React, { Component } from "react";
import _ from 'lodash';
import CommentInput from "./CommentInput.jsx";
import CommentList from "./CommentList.jsx";
import wrapWithLoadData from './components/wrapWithLoadData.jsx';
import PropTypes from 'prop-types';

import './index.css'

class CommentApp extends Component {


    static propTypes = {
        data: PropTypes.any,
        saveData: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = { comments: props.data }
    }


    handleSubmitComment(comment) {
        if (!comment) return
        if (!comment.username) return alert('请输入用户名')
        if (!comment.content) return alert('请输入评论内容')
        const comments = this.state.comments
        comments.push(comment)
        this.setState({ comments })
        this.props.saveData(comments)
    }

    handleDeleteComment(index) {
        const comments = this.state.comments
        comments.splice(index, 1)
        this.setState({ comments })
        this.props.saveData(comments)
    }





    render() {
        return (
            <div className="warpper">
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment.bind(this)} />
            </div>
        )
    }
}

const warpCommentApp = wrapWithLoadData(CommentApp, 'comments')
export default warpCommentApp

// export default class CommentApp extends Component {
//     render() {
//         return <div>hello</div>
//     }
// }
