import "./about.css";

const About = () => {
	return (
		<section className="about" id="about">
			<div className="container about_container">
				<div className="about_wrapper">
					<h2>TRANSITIONING PHASE TO WEB DEVELOPMENT</h2>
					{/* <hr className="header_line" /> */}
					<p>
						I had the honor of serving in the United States Air Force as an F-16
						Fighter Jet Crew Chief. The majority of my service was spent
						overseas! Being able to travel and explore Asia while being
						stationed in Japan and Korea was a huge blessing.
					</p>
					<p>
						With the end of my service in November, 2022, I have officially
						started my programming journey with Code Platoon, a non-profit
						coding bootcamp based in Chicago! I started as a self-learner 8
						months prior to joining the bootcamp, learning Ruby on Rails and
						ReactJS. With the bootcamp, we are using Python and Django for the
						backend application and ReactJS for the frontend.
					</p>
					<p>
						Joining Code Platoon has been playing a tremendous part in
						understanding the context behind the functionalities of programming,
						a different approach from learning on my own.
					</p>
					<h2>Experience in programming...</h2>
					{/* <hr className="header_line" /> */}
					<p>
						<em>Why did you get into programming?</em>
						<p>
							I love building and technology! Programming just seems to fit my
							desire to build and solve problems. Also, being a part of a
							community that builds applications/software that improves the
							quality of our lives is amazing!
						</p>
						<em>What have you experienced in programming so far?</em>
						<p>
							The languages, frameworks/libraries, and database I used to build
							full-stack applications for learning purposes are Ruby on Rails,
							Python and Django, JavaScript, HTML, CSS, ReactJS, and PostgreSQL.
							I love learning new features and tools that better me as a
							programmer! Currently, I am studying Redux to have a better grasp
							on state management for my personal project, real-time chat
							application.
						</p>
					</p>
				</div>
			</div>
		</section>
	);
};

export default About;
