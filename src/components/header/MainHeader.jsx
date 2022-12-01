import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./header.css";

import React from "react";

const MainHeader = () => {
	return (
		<header className="main_header" id="home">
			<div className="container main_header-container">
				<ul className="main_header_social">
					<li>
						<a
							href="https://linkedin.com/in/samuel-son4/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaLinkedinIn />
						</a>
					</li>
					<li>
						<a
							href="https://instagram.com/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<AiFillInstagram />
						</a>
					</li>
					<li>
						<a
							href="https://github.com/Son-Daehan/"
							target="_blank"
							rel="noreferrer noopener"
						>
							<FaGithub />
						</a>
					</li>
				</ul>
				<div className="main_header_center">
					<h1>
						I AM A <em>DEVELOPER</em>
					</h1>
					<h2>
						<em>IN TRAINING</em>
					</h2>
					<hr className="header_line" />
					<h2>Software Engineer</h2>
				</div>
				<div className="email_container">
					<p
						href="https://linkedin.com/in/spmuel-son4/"
						target="_blank"
						rel="noreferrer noopener"
					>
						samuel.daehan@gmail.com
					</p>
				</div>
			</div>
		</header>
	);
};

export default MainHeader;
