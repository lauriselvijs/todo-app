import styles from "./LoadingScreen.module.scss";

const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <div className={styles.spinner}></div>
    </div>
  );
};

export default LoadingScreen;
