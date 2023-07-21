import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Grocery Store Web Design & E-commerce Development",
    github: "https://github.com/zohaibulhassan02/gorocerystore.github.io",
    demo: "https://zohaibulhassan02.github.io/gorocerystore.github.io",
  },
  {
    id: 2,
    image: IMG2,
    title: "Food Resturant Website Design and Development",
    github: "https://github.com/zohaibulhassan02/foodrestaurant.github.io",
    demo: "https://zohaibulhassan02.github.io/foodrestaurant.github.io",
  },
  {
    id: 3,
    image: IMG3,
    title: "Social Media Clone Design and Development",
    github: "https://github.com/zohaibulhassan02/socialmediaclone.github.io",
    demo: "https://zohaibulhassan02.github.io/socialmediaclone.github.io",
  },
  {
    id: 4,
    image: IMG4,
    title: "Construction Company Web Design & Development",
    github: "https://github.com/zohaibulhassan02/constructionwebsite.github.io",
    demo: "https://advancedpapaving.com/?nocache=1",
  },
  {
    id: 5,
    image: IMG5,
    title: "Modern Technology Landing Page Header UI Design",
    github: "https://dribbble.com/shots/21997879-Landing-Page-Section",
    demo: "https://www.figma.com/file/tGJOv8bKx6w7RfKXOWh2rt/Flux---Figma-Build-Tutorial-(Starter)-(Community)?type=design&node-id=0%3A1&mode=design&t=8FtXqheI9Z399pto-1",
  },
  {
    id: 6,
    image: IMG6,
    title: "Crypto Currency Dashboard & Financial Visualization",
    github: "https://github.com/zohaibulhassan",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualiation",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
