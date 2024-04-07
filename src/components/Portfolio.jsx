import React, { useState } from "react";
import trainTransport from "../assets/portfolio/Train-transportation.png";
import studentRegistration from "../assets/portfolio/student-registration.png";
import ticTacToe from "../assets/portfolio/tic-tac-toe.png";
import bmiCurrency from "../assets/portfolio/BMI.png";
import responsiveWeb from "../assets/portfolio/responsive.png";
import ticketApp from "../assets/portfolio/ticket.png";

import { FaTimes } from "react-icons/fa";
import trainProject from "../assets/demos/Train_project.mp4";
import wpfProject from "../assets/demos/WPF_project.mp4";
import ticTacToeProject from "../assets/demos/tic-tac-toe.mp4";
import bmiCurrencyProject from "../assets/demos/BMI-Currency.mp4";
import responsiveWebProject from "../assets/demos/Responsive.mp4";
import ticketAppProject from "../assets/demos/Ticketing-App.mp4";


const Portfolio = () => {
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);

  const portfolios = [
    {
      id: 1,
      src: trainTransport,
      description: "Using C++ and leveraging array data structures, I developed a sophisticated solution aimed at optimizing delivery logistics. This project significantly reduces time, resource, and effort expenditure by efficiently calculating delivery charges and profits within specified time frames.",
      demoVideo: trainProject,
      code: "https://github.com/mhdmusharraf/Delivery-Charge-Calculator-For-Railway-Stations.git"
    },
    {
      id: 2,
      src: studentRegistration,
      description: "Employing WPF for the frontend and C# for the backend, I developed a comprehensive solution to facilitate seamless registration processes. This project marks my entry into practical software development, showcasing my proficiency in both frontend and backend technologies.",
      demoVideo: wpfProject,
      code: "https://github.com/mhdmusharraf/Student_Registration_System_4080.git"
    },
    {
      id: 3,
      src: ticTacToe,
      description: "This project is a Python implementation of a Tic-Tac-Toe game utilizing a backtracking algorithm. It features both single-player and multiplayer modes, allowing players to compete against each other or against an AI opponent. The game's logic includes displaying the current state of the board, checking for win or draw conditions, and enabling players to take turns making moves.",
      demoVideo: ticTacToeProject,
      code: "https://github.com/mhdmusharraf/AI-Projects.git"
    },
    {
      id: 4,
      src: bmiCurrency,
      description: "This project utilizes React with Vite for efficient development and a seamless user experience. It incorporates an online API for currency conversion, enabling users to effortlessly convert between currencies. The combination of React Vite and the online API ensures a smooth and responsive BMI calculator and currency converter, enhancing usability and functionality.",
      demoVideo: bmiCurrencyProject,
      code: "https://github.com/mhdmusharraf/small-react-projects.git"
    },
    {
      id: 5,
      src: responsiveWeb,
      description: "Explore the art of responsive web design using just HTML and CSS! This repository showcases the elegance of crafting adaptable, device-friendly layouts without complex frameworks. Dive in to discover techniques for creating visually stunning websites that seamlessly adjust to different screens.",
      demoVideo: responsiveWebProject,
      code: "https://github.com/mhdmusharraf/Responsive-Web-Design.git"
    },
    {
      id: 6,
      src: ticketApp,
      description: " This Ticketing app combines Next.js for fast rendering, Tailwind CSS for quick styling, and MongoDB for scalable data storage. This tech stack delivers a seamless user experience with faster loading times, customizable UI design, and efficient ticketing operations.",





      
      demoVideo: ticketAppProject,
      code: "https://github.com/mhdmusharraf/Ticketing-App.git"
    },
  ];

  const handleClick = (id) => {
    setSelectedPortfolio(selectedPortfolio === id ? null : id);
  };

  const handleClose = () => {
    setSelectedPortfolio(null);
  };

  const handleDemoClick = (demoVideo) => {
    if (demoVideo) {
      window.open(demoVideo, "_blank");
    }
  };

  const handleCodeClick = (code) => {
    if (code) {
      window.open(code, "_blank");
    }
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Projects I have worked on</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map((portfolio) => {
            return (
              <div
                key={portfolio.id}
                className="shadow-md shadow-gray-600 rounded-lg"
              >
                <div
                  className="rounded-md duration-200 hover:scale-105 cursor-pointer"
                  onClick={() => handleClick(portfolio.id)}
                >
                  {selectedPortfolio === portfolio.id ? (
                    <div className="w-full h-full bg-gray-800 bg-opacity-90 p-4 flex flex-col items-center justify-center">
                      <button
                        className="absolute top-2 right-2 text-white"
                        onClick={handleClose}
                      >
                        <FaTimes />
                      </button>
                      <p className="text-white">{portfolio.description}</p>
                    </div>
                  ) : (
                    <img src={portfolio.src} alt="" className="rounded-md" />
                  )}
                </div>
                <div className="flex items-center justify-center">
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => handleDemoClick(portfolio.demoVideo)}
                  >
                    Demo
                  </button>
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => handleCodeClick(portfolio.code)}
                  >
                    Code
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
