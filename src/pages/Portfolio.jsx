import { useState } from "react";
import "../styles/Portfolio.css";
export default function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const info = [
    {
      name: "Flashcards App",
      language: "React",
      image: "./FlashCards.png",
      link: "https://anita-david.github.io/Flash-Cards/",
    },
    {
      name: "Weather API App",
      language: "Javascript",
      image: "./Weather_API.png",
      link: "https://anita-david.github.io/Weather-API/",
    },
    {
      name: "Amazon Clone",
      language: "Javascript",
      image: "./Amazon-clone.png",
      link: "https://anita-david.github.io/Amazon-Clone/",
    },
    {
      name: "Youtube Clone",
      language: "Javascript",
      image: "./YouTube-Clone.png",
      link: "https://anita-david.github.io/youtubeclone/",
    },
    {
      name: "Todo App",
      language: "Javascript",
      image: "./Todo-App.png",
      link: "https://anita-david.github.io/todo/",
    },
    {
      name: "Test App",
      language: "Javascript",
      image: "./Test-App.png",
      link: "https://anita-david.github.io/test/",
    },
  ];
  const openModal = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };
  return (
    <div className="portfolio">
      <p className="portfolio-title">
        <span>My</span> Portfolio
      </p>
      <div className="project-container">
        {info.map((item, index) => (
          <div key={index} className="project" onClick={() => openModal(item)}>
            <div className="flashcards">
              <img className="flashcards-img" src={item.image} alt="" />
              <p className="app-name">{item.name}</p>
              <p className="language">{item.language}</p>
            </div>
          </div>
        ))}
      </div>

      {isOpen && selectedItem && (
        <div className="background">
          <div className="card" style={{ position: "relative" }}>
            <button
              className="close-button"
              onClick={closeModal}
              style={{ position: "absolute", top: 10, right: 10 }}
            >
              X
            </button>

            <div className="flashcards">
              <img className="flashcards-img" src={selectedItem.image} alt="" />
              <p className="app-name-background">{selectedItem.name}</p>
              <p className="language">{selectedItem.language}</p>
              <a
                className="site-link"
                href={selectedItem.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Site
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
