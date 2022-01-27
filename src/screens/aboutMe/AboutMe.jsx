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
          In early 2020, during the first lockdown my IT journey began. Although
          I have always been interested in technology as I have used a lot of
          different software for producing music, I decided to look deeper into
          how the software that I used functions. Looking at the code behind
          these softwares sent me down the rabbit hole of tech. I signed up for
          various Udemy and Coursera courses utilising front and back end
          languages such as JavaScript, Python, PostgreSQL, HTML and CSS to name
          a few. The more I attained knowledge in the field, the more my passion
          grew for technology until the point I decided that I could actually
          take this on as a serious profession. I then searched for jobs in the
          field and came across QA. They accepted my application and trained me
          up to become a software developer.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
