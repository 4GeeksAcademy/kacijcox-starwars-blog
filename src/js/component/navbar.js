import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const{store, actions} = useContext (Context)
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<div className="ml-auto">
			<div className="dropdown">
				<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
					favorites
				</button>
				<ul className="dropdown-menu dropdown-menu-end">
					{store.favorites?.map((favorite, index)=>(
						<li key={index} className="dropdown-item">{favorite}<a onClick={(e)=> actions.deleteFavorite(favorite)}>x</a></li>
					))}
				</ul>
				</div>
			</div>
		</nav>
	);
};
