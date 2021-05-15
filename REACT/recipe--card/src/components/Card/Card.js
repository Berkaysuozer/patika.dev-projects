import './Card.css';
import React, { useState } from 'react';

class Card extends React.Component {
	constructor() {
		super();

		this.state = {
			isLiked: false,
		};
	}

	Hearth = () => {
		this.setState({ isLiked: !this.state.isLiked });
	};

	render() {
		return (
			<div className="card">
				<div className="card-header">
					<div className="profile">
						<span className="letter">{this.props.author[0]}</span>
					</div>
					<div className="card-title-group">
						<h5 className="card-title">{this.props.title}</h5>
						<div className="card-date">{this.props.date}</div>
					</div>
				</div>
				<img className="card-image" src={this.props.image} alt="Logo" />
				<div className="card-text">{this.props.description}</div>

				<div className="card-like-bar" onClick={this.Hearth}>
					<img
						className="card-like-icon"
						src={this.state.isLiked ? this.props.heartFill : this.props.heartOutline}
						alt="Logo"
					/>

					<div className="like-text">
						<b>{this.props.likeCount}</b> kişi bu tarifi beğendi.
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
