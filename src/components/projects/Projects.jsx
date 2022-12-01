import FeaturedProjects from "../featured_projects/FeaturedProjects";
import "./Projects.css";

const Projects = () => {
	return (
		<div className="projects" id="projects">
			<div className="container projects_container">
				<div className="projects_header_wrapper">
					<h2>PROJECTS</h2>
					{/* <hr className="header_line" /> */}
					<FeaturedProjects />
				</div>
			</div>
		</div>
	);
};

export default Projects;
