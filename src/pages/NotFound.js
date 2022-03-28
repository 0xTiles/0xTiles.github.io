// modules
import React from "react";
import {Link, Navigate} from "react-router-dom";

// src

// static


const NotFound = ()=> {

	const [redirect, setRedirect] = React.useState(null)

	if(redirect) return <Navigate replace to={redirect} />

	return <React.Fragment>
		<div className="container-lg px-3 my-5 markdown-body">
			<h2>404 Page Not Found</h2>
			<h3>
				<Link to='/'>Take me home</Link>
			</h3>
		</div>
	</React.Fragment>
}

export default NotFound;