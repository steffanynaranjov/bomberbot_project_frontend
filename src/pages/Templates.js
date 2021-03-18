import React from "react";

const Templates = () => {
  return (
    <div className="py-12 bg-hero-pattern bg-no-repeat bg-cover">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-blue-400 sm:text-6xl">
            Learning
          </h2>

          <p className="text-base text-blue-400 font-semibold tracking-wide uppercase">
            CodeSkills
          </p>
          <p className="mt-4 max-w-2xl text-xl text-black md:mx-auto">
            In this section we are going to learn more about HTML, CSS and JS.
          </p>
          <br></br>
          <h4 className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-blue-400 sm:text-4xl">
            HTML, CSS and JS
          </h4>
          <p className="mt-4 max-w-2xl text-xl text-black md:mx-auto">
            HTML5 is the latest version of Hypertext Markup Language, the code
            that describes web pages. It's actually three kinds of code: HTML,
            which provides the structure; Cascading Style Sheets (CSS), which
            take care of presentation; and JavaScript, which makes things
            happen.
          </p>
        </div>

        <br></br>
        <iframe
          className="mx-auto md:w-1/2 md:h-96"
          width="230"
          height="114"
          src="https://www.youtube.com/embed/_GTMOmRrqkU"
          frameborder="0"
          title="bomberbot"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Templates;
