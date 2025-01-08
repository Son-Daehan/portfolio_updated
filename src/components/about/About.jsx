import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container about_container">
        <div className="about_wrapper">
          <h2>About Me</h2>
          <p>
            My journey began in the United States Air Force, where I served as
            an F-16 Fighter Jet Crew Chief, maintaining complex systems under
            high-stakes conditions. Living overseas in Japan and Korea not only
            honed my discipline but also broadened my perspective through travel
            and exploration.
          </p>
          <p>
            After completing my service in November 2022, I transitioned into
            programming, combining my problem-solving mindset with a passion for
            building. My programming journey started with self-study, diving
            into Ruby on Rails and ReactJS, and continued at{" "}
            <strong>Code Platoon</strong>, a Chicago-based non-profit coding
            bootcamp. There, I gained hands-on experience building full-stack
            applications using Python, Django, ReactJS, and PostgreSQL.
          </p>
          <p>
            I thrive on creating solutions that make a difference. Whether it's
            crafting elegant frontend designs or engineering efficient backend
            systems, I enjoy bringing ideas to life through code.
          </p>

          <h2>Why I Chose Programming</h2>
          <p>
            Technology and building have always been my passions. Programming
            allows me to combine these interests, solve meaningful problems, and
            be part of a community that drives innovation to improve lives.
          </p>

          <h2>My Technical Journey</h2>
          <p>
            I've worked with a variety of languages, frameworks, and tools,
            including Python, Django, JavaScript, ReactJS, Ruby on Rails,
            HTML/CSS, and PostgreSQL. Currently, I’m exploring state management
            with Redux while working on a personal project: a real-time chat
            application.
          </p>
          <p>
            My goal is to continue learning, growing, and contributing to
            impactful projects that make a difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
