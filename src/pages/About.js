import React from "react";

const About = () => {
  return (
    <div className="py-12 bg-hero-pattern bg-no-repeat bg-cover">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-400 sm:text-6xl">
            About
          </h2>

          <p className="text-base text-blue-400 font-semibold tracking-wide uppercase">
            CodeSkills
          </p>
          <p className="mt-4 max-w-2xl text-xl text-black md:mx-auto">
            CodeSkills is the solution for children and young people around the
            world to learn in the easy way web development with HTML, CSS and
            JavaScript. This code editor has the potential to flatten the
            learning curve for web development and also has the potential for
            developing programming skills dynamically for young students. Also,
            those who want to take the lead and teach to the young students,
            have the advantage to explain it in an easy way to them as a learn
            as you go methodology.
          </p>
        </div>
        <br></br>
        <iframe
          className="mx-auto md:w-1/2 md:h-96"
          width="230"
          height="114"
          src="https://www.youtube.com/embed/wTsMglxv9DA"
          frameborder="0"
          title="bomberbot"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default About;
