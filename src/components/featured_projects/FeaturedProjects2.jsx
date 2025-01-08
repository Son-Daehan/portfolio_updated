import React from "react";
import portfolio_img from "../../images/portfolio_img.png";
import chat_application_img from "../../images/chat_application_img.png";
import restaurant_app_img from "../../images/restaurant_app_img.png";
import "./FeaturedProjects2.css";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { useState } from "react";
import featuredProjects from "../../data/featured_projects.json";
import { useEffect } from "react";

const FeaturedProjects2 = () => {
  const [projects, setProjects] = useState(featuredProjects);
  const [displayImg, setDisplayImg] = useState(true);

  useEffect(() => {
    console.log(projects);
  });

  return (
    <div className="featured-project-container">
      <div className="featured-project-wrapper">
        <div className="featured-project-left-wrapper">
          <div className="featured-project-title-container">
            <h3>
              <em>
                <b>Personal Portfolio</b>
              </em>
            </h3>
          </div>
          <div className="project-description-container">
            <p>
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
        <div className="featured-project-right-wrapper">
          <div className="featured-project-img-container">
            <a href="https://github.com/Son-Daehan/portfolio_updated">
              <img
                className="featured_project_img"
                src={portfolio_img}
                alt="portfolio-img"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="featured-project-wrapper">
        <div className="featured-project-right-wrapper">
          <div className="featured-project-img-container">
            <a href="https://github.com/Son-Daehan/chat_app">
              <img
                className="featured_project_img"
                src={chat_application_img}
                alt="portfolio-img"
              />
            </a>
          </div>
        </div>
        <div className="featured-project-left-wrapper-second">
          <div className="featured-project-title-container-second">
            <h3>
              <em>
                <b>Real-Time Chat Application</b>
              </em>
            </h3>
          </div>
          <div className="project-description-container">
            <p>
              A simple real-time chat application that uses websockets to enable
              two-way communication between the client and server. This project
              only contains a small scope of what modern real-time chat
              applications can do. For learning purposes, it will be
              consistently updated!
            </p>
          </div>
          <div className="project-additional-container">
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
                <a href="http://44.212.9.213/login/">
                  <CgWebsite className="project-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="featured-project-wrapper">
        <div className="featured-project-left-wrapper">
          <div className="featured-project-title-container">
            <h3>
              <em>
                <b>Restaurant Social Media App</b>
              </em>
            </h3>
          </div>
          <div className="project-description-container">
            <p>
              A social media application with real-time chat feature using
              Websockets. This application utilizes geolocation API and Yelp's
              API to find restaurants near the user. Users are also able to
              post, comment, and likes reviews/comments which is saved in
              postgresql.
            </p>
          </div>
          <div className="project-additional-container">
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
            <ul className="project-url">
              <li>
                <a href="https://github.com/Son-Daehan/travel_app">
                  <AiFillGithub className="project-icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="featured-project-right-wrapper">
          <div className="featured-project-img-container">
            <a href="https://github.com/Son-Daehan/travel_app">
              <img
                className="featured_project_img"
                src={restaurant_app_img}
                alt="portfolio-img"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects2;
