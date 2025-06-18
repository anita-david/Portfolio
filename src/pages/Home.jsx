import "../styles/Home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="home-profile-image-container">
        <img
          className="home-profile-image"
          src="/AnitaDavid.jpg"
          alt=""
        />
      </div>
      <div className="home-description-container">
        <p className="home-name">
          I'm <span>Anita.</span>
        </p>
        <p className="home-title">
          Frontend Developer
        </p>
        <p className="home-description">
           Innovative Tech enthusiast and Frontend developer passionate about building intuitive, user-focused web experiences. I thrive on learning, problem-solving, and translating design into clean, functional applications. I'm eager to contribute to real-world projects, grow in collaborative environments, and bring fresh perspective into every team I join.
        </p>
      </div>
    </div>
  );
}
