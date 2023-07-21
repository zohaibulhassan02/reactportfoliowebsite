import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
    "An incredibly talented web developer! Their expertise in front-end technologies brought our website to life with a modern and intuitive user interface and I would highly consider it in our next projects.",
  },
  {
    avatar: AVTR2,
    name: "Ran Sagell",
    review:
    "I was thoroughly impressed by the freelancer's back-end development skills. They created a robust and scalable system that handles our complex data requirements flawlessly.",
  },
  {
    avatar: AVTR3,
    name: "Johnson Williams",
    review:
    "Working with this web developer was a breeze! They were attentive to our needs, responsive to feedback, and delivered a fully functional e-commerce website that exceeded our sales targets.",
  },
  {
    avatar: AVTR4,
    name: "Maria Gomez",
    review:
    "Highly recommended web developer! Their proficiency in web security ensured our website's protection from potential threats, giving us peace of mind in today's digital landscape.",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
