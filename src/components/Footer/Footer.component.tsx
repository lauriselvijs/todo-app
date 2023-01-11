import "./Footer.style.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/app/store";

const Footer = () => {
  const darkMode = useSelector((state: RootState) => state.dark.darkMode);

  return (
    <footer className={darkMode ? "footer-dark-mode" : "footer"}>
      Challenge by &nbsp;
      <a
        rel="noreferrer"
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        {" "}
        Frontend Mentor
      </a>
      . Coded by &nbsp;
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/lauriselvijs/"
      >
        Lauris
      </a>
      .
    </footer>
  );
};

export default Footer;
