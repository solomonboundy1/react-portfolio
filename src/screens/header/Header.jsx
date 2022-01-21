import Typed from "react-typed";
import "./header.css";

const Header = () => {
  return (
    <div className="main-info">
      <h1>What am I?</h1>
      <Typed
        strings={[
          "",
          "A Front End Developer",
          "",
          "A Back End Developer",
          "",
          "A Full Stack Developer",
          "",
          "A Pianist",
          "",
          "A Session Musician",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
};

export default Header;
