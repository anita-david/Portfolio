import "../styles/Contact.css";
export default function Contact() {
  return (
    <div className="contact">
      <p className="contact-title">
        <span>Contact</span> Me
      </p>
      <div className="contact-description">
        <div className="contact-details">
          <div className="icon-container">
            <div className="email"></div>
          </div>
          <div>anitafunmilayo@gmail.com</div>
        </div>
        <div className="contact-details">
          <div className="icon-container">
           <div className="phone"></div>
          </div>
          <div>+234 701 382 8981</div>
        </div>
        <div className="icons-container">
          <div className="icons">
            <a
              href="https://www.linkedin.com/in/anitaoluwafunmilayodavid/"
              target="_blank"
            >
              <img src="/linkedin-in-brands.svg" alt="" />
            </a>
          </div>
          <div className="icons">
            <a href="https://github.com/anita-david" target="_blank">
              <img src="/github-brands.svg" alt="" />
            </a>
          </div>
          <div className="icons">
            <a href="https://x.com/the_anita_david" target="_blank">
              <img src="/x-twitter-brands.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
