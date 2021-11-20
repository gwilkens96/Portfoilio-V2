import React from "react";
import griffinAndTrudy from "../img/griffinandtrudy.jpg";

export default function AboutMe() {
  return (
    <div>
      <p>
        {""}Welcome to my portfolio! My name is Griffin Wilkens, and I am a
        certified full-stack web developer trained at the Georgia Tech coding
        bootcamp. Born in New York, I moved to Georgia when I was two years old
        and lived in the greater Atlanta area all my life. I've worked various
        restaurant jobs where I learned a variety of skills such as time
        management, multitasking, problem solving, leadership, and listening
        skills. I am proficient in CSS, Javascript, Express, Handlebars, MySQL,
        Node.js, React, and MongoDB. I graduated Cum Laude at Northview High
        School in 2014. My hobbies include gaming, reading, and playing with my
        cat, Trudy Blinksy.
      </p>
      <img
        src={griffinAndTrudy}
        alt="griffin and trudy"
        class="img-fluid h-50 cat"
      />
    </div>
  );
}
