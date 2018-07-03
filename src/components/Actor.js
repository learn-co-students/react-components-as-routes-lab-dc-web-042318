import React from "react";

const Actor = props => {
	return (
		<div className="actor">
			<h2>Name: {props.actor.name}</h2>
			<p>Movies:</p>
			<ul>{props.actor.movies.map(movie => <li>{movie}</li>)}</ul>
		</div>
	);
};

export default Actor;
