import "./aboutMe.css";
import me from "../../images/me.JPG";

const AboutMe = () => {
  return (
    <div className="about__container" id="about-me">
      <div>
        <img src={me} alt="Solomon" />
      </div>
      <div className="about__text">
        <h1>ABOUT ME</h1>
        <p>
          My IT journey started as a mild interest at the beginning of 2020 when
          I decided to look further into the code behind software, and plugins
          that I regularly use as a music producer. This opened up an unfamiliar
          and exciting world to me. During my free time, I started completing
          online short courses on Udemy and Coursera surrounding both front-end
          and back-end technologies and languages such as JavaScript, Python,
          CSS, HTML, and PostgreSQL. This kick-started my interest into applying
          for jobs within the tech industry as I had developed a new found
          passion. As a disciplined pianist for over 20 years, I have become
          heavily focused on my craft and this has affected other areas of my
          life in the same way, such as coding.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
