import "../styles/About.css";
export default function About() {
  return (
    <div>
      <div className="about">
        <p className="about-title">
          <span>About</span> Me
        </p>
      </div>
      <div className="about-description">
        <p className="about-description-title">Skills</p>
      </div>
      <div className="about-skills-container">
        <div className="about-skills">React</div>
        <div className="about-skills">Javascript</div>
        <div className="about-skills">Typescript</div>
        <div className="about-skills">Tailwind CSS</div>
        <div className="about-skills">HTML</div>
      </div>
      <p className="about-description-title">Experience & Education</p>
      <div className="description-container">
        <div className="experience-container">
          <div className="about-description-details">
            <div className="icon-container">
             <div className="experience-icon"></div>
            </div>
            <div className="duration">2024 - Present</div>
          </div>
          <div className="details">
          Collaborated with a team of product managers, frontend engineers, backend engineers, cloud engineers cybersecurity personnel  to design and build a Student Marketplace Platform using React 18+, React Router v6,  Tailwind CSS, Tanstack Query and Vite.
Implemented reusable UI components, state management logic, and responsive layouts.
Participated in peer code reviews, Git-based collaboration, and continuous integration.

          </div>
          <div className="about-description-details">
            <div className="icon-container">
              <div className="experience-icon"></div>
            </div>
            <div className="duration">Apr- Oct 2024</div>
          </div>
          <div className="details">
            Worked on a project that involved building the user interface of a web application using Figma.
          </div>
        </div>
        <div className="education-container">
          <div className="about-description-details">
            <div className="icon-container">
             <div className="education-icon"></div>
            </div>
            <div className="duration">2024 -2025</div>
          </div>
          <div className="details">
           <p>Front-End Engineering</p>
           <p>AltSchool Africa</p>

          </div>
          <div className="about-description-details">
            <div className="icon-container">
             <div className="education-icon"></div>
            </div>
            <div className="duration">2012 - 2018</div>
          </div>
          <div className="details">
            <p>B.Sc Forest Resources Management</p>
            <p>University of Ibadan</p>
          </div>
        </div>
      </div>
    </div>
  );
}
