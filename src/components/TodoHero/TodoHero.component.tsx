import BgDesktopLight from "../../assets/images/bg-desktop-light.jpg";
import BgDesktopDark from "../../assets/images/bg-desktop-dark.jpg";

import styles from "./TodoHero.style.module.scss";

const TodoHero = () => {
  return (
    <img
      alt="Header background"
      className={styles.todoHero}
      src={BgDesktopLight}
    ></img>
  );
};

export default TodoHero;
