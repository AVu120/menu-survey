import styles from "./NoMatchesFound.module.scss";

const NoMatchesFound = () => {
  return (
    <div className={styles.NoMatchesFound}>
      <p className={styles.emptyResultMsg}>No matches found.</p>{" "}
      <p className={styles.recommendationMsg}>Please expand your search.</p>
    </div>
  );
};

export default NoMatchesFound;
