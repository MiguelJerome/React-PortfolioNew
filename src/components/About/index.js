import React from 'react';
import coverImage from '../../assets/cover/MiguelJerome.png';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "10%" }} alt="cover" />
      <div className="my-2">
      <p>Hi, my name is Miguel Jerome, and I'm currently a student from the University of Ottawa full stack web development and also a student from La Cite collegiale of Ottawa studying Computer Programming.
        <br />
        I m pleased to show you my present work, and hopefully, you see the potential in me.
        <br />
        I speak French and English.
        <br />
        </p>
      </div>
    </section>
  );
}

export default About;
