import React, { Component } from "react";
import _ from 'lodash';
import CommentInput from "./comment/CommentInput.jsx";
import CommentList from "./comment/CommentList.jsx";
import './comment.css'

export default class CommentApp extends Component {
	constructor() {
		super()
		this.state = {
			comments: []
		}
	}

	handleSubmitComment(comment) {
		this.state.comments.push(comment)
		this.setState({
			comments: this.state.comments
		})
	}



	render() {
		return (
			<div className="warpper">
				<CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
				<CommentList comments={this.state.comments} />
			</div>
		)
	}
}
