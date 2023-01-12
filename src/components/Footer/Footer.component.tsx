import styles from "./Footer.style.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
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
