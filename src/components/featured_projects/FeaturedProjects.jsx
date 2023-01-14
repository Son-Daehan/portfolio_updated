import React from "react";
import portfolio_img from "../../images/portfolio_img.png";
import chat_application_img from "../../images/chat_application_img.png";
import restaurant_app_img from "../../images/restaurant_app_img.png";
import "./FeaturedProjects.css";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

const FeaturedProjects = () => {
	return (
		<div className="featured_project_container">
			<div className="featured_project_wrapper">
				<div className="featured_project_left_wrapper">
					<h3 className="project-title">Personal Portfolio</h3>
					<div>
						<p className="project-description-container">
							A minimilistic designed portfolio website using ReactJS. This was
							a great opportunity to learn different features of ReactJS and CSS
							styling components! This website features my personal projects and
							resume.
						</p>
					</div>
					<div className="project-additional-container">
						<ul className="framework-library-used">
							<li>JavaScript</li>
							<li>HTML</li>
							<li>CSS</li>
							<li>ReactJS</li>
						</ul>
						<ul className="project-url">
							<li>
								<a href="https://github.com/Son-Daehan/portfolio_updated">
									<AiFillGithub className="project-icon" />
								</a>
							</li>
							<li>
								<a href="https://www.samuelson.dev/">
									<CgWebsite className="project-icon" />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="featured_project_right_wrapper">
					<a href="https://www.github.com">
						<img
							className="featured_project_img"
							src={portfolio_img}
							alt="portfolio-img"
						/>
					</a>
				</div>
			</div>
			<div className="featured_project_wrapper">
				<div className="featured_project_right_wrapper">
					<a href="https://www.github.com">
						<img
							className="featured_project_img"
							src={chat_application_img}
							alt="portfolio-img"
						/>
					</a>
				</div>
				<div className="featured_project_left_wrapper">
					<h3 className="project-title-second">Real-Time Chat Application</h3>
					<div>
						<p className="project-description-container-second">
							A simple real-time chat application that uses websockets to enable
							two-way communication between the client and server. This project
							only contains a small scope of what modern real-time chat
							applications can do. For learning purposes, it will be
							consistently updated!
						</p>
					</div>
					<div className="project-additional-container-second">
						<ul className="framework-library-used-second">
							<li>JavaScript</li>
							<li>ReactJS</li>
							<li>Python</li>
							<li>Django</li>
						</ul>

						<ul className="framework-library-used-second">
							<li>PostgreSQL</li>
							<li>Redux</li>
							<li>Redis</li>
						</ul>
						<ul className="project-url-second">
							<li>
								<a href="https://github.com/Son-Daehan/chat_app">
									<AiFillGithub className="project-icon" />
								</a>
							</li>
							<li>
								<a href="http://54.88.231.119/">
									<CgWebsite className="project-icon" />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="featured_project_wrapper">
				<div className="featured_project_left_wrapper">
					<h3 className="project-title">Restaurant Social Media App</h3>
					<div>
						<p className="project-description-container">
							A social media application with real-time chat feature using
							Websockets. This application utilizes geolocation API and Yelp's
							API to find restaurants near the user. Users are also able to
							post, comment, and likes reviews/comments which is saved in
							postgresql.
						</p>
					</div>
					<div className="project-additional-container">
						<div>
							<ul className="framework-library-used">
								<li>Python</li>
								<li>Django</li>
								<li>Redis</li>
								<li>JavaScript</li>
							</ul>
							<ul className="framework-library-used">
								<li>ReactJS</li>
								<li>Redux</li>
								<li>HTML</li>
								<li>CSS</li>
							</ul>
						</div>
						<ul className="project-url">
							<li>
								<a href="https://github.com/Son-Daehan/travel_app">
									<AiFillGithub className="project-icon" />
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="featured_project_right_wrapper">
					<a href="https://www.github.com">
						<img
							className="featured_project_img"
							src={restaurant_app_img}
							alt="portfolio-img"
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default FeaturedProjects;
