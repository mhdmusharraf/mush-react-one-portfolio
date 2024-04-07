import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Third-year computer engineering student, future full stack web
          developer. My passion for web space development brought me to
          University Of Ruhuna where I am working on my bachelor's degree.
        </p>
        <br />
        <p className="text-xl">
          Currently, I focus on installing and testing user interface elements
          on responsive websites. I typically use HTML/CSS , JavaScript and
          ReactJS in the client, Node.js on the server, and http for
          communication between client and server. <br />
          <br />
          🌟 Let's connect! I'm excited about opportunities to contribute to
          impactful projects and collaborate with teams passionate about pushing
          the boundaries of web development.
        </p>
      </div>
    </div>
  );
};

export default About;
