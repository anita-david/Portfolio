import "../styles/Home.css";
export default function Home() {
  return (
    <div className="home">
      <div className="home-profile-image-container">
        <img
          className="home-profile-image"
          src="/Anita-David-Hero.png"
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
          This portfolio illustrates my journey as a frontend developer,
          featuring a range of projects that demonstrate my design skills,
          techniques, and achievements in creating impactful digital solutions.
        </p>
      </div>
    </div>
  );
}
