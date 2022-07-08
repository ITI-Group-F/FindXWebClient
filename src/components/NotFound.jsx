import { Typography } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';
import NotFoundStyle from "./NotFound.module.css"

export default function NotFound() {
  return (
    <>
      
	<div className={`${NotFoundStyle.notFoundContainer}`} >
		<div className={`${NotFoundStyle.notFoundSubContainer}`} >
			<div className={`${NotFoundStyle.notfound404}`}>
				<h1>Oops!</h1>
			</div>
			<h2>404 - Page not found</h2>
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
			<Link to="/">Go To Homepage</Link>
		</div>
	</div>

    </>
  );
}
