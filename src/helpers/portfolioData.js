import music from "../images/projectsicon/MusicDirectory.gif";
import cinema from "../images/projectsicon/QACinemas.gif";

const portfolioData = [
  {
    image: music,
    link: "https://github.com/solomonboundy1/HobbyWebApplication",
    desc: "The Music Directory",
    summary:
      "I created a Spring Boot web application for this project which acted as a directory for sheet music and the shops in which the music was available. I built the backend of my application using the Java Spring Framework and connected it locally to a MySQL database. The front end consisted of a home page, about us page and two separate pages in which you could create, read update and delete entries into the shop section of the directory or the sheet music section. I mainly used CSS for the styling and some bootstrap. I did unit tests and integration tests using JUnit and Mockito but also used Selenium to ensure the pages were running correctly. ",
    tech: "Java, MySQL, H2, HTML5, CSS3, JavaScript, Spring Boot, JUnit, Mockito, Selenium",
  },
  {
    image: cinema,
    link: "https://github.com/solomonboundy1/QA_Cinemas",
    desc: "QA Cinemas",
    summary:
      "I was part of a group project that required us to create a fully functioning Cinema website adhering to user requirements using the MERN stack. This project was an amazing experience and really solidified my confidence and understanding of using an agile methodology. For this project, my main duties were primarily focused on building the front end using React and Node, whilst the back end was based purely on MongoDB Node and Express. During the second sprint, it was my job to review code written by the other team members, inspect the overall functionality of the website, ensure that the tests had reach a minimum coverage of 80% and fix any bugs. The final product was a fully functioning Cinema website, able to store user details and payment information securely. ",
    tech: "JavaScript, React, NodeJS, ExpressJS, MongoDB, Mocha, Chai, Mongoose, HTML5, CSS3",
  },
];

export default portfolioData;
