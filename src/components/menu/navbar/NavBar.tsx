import { useState } from "react";
import SearchIcon from "mdi-react/MagnifyIcon";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className={isSearching ? styles.NavBar_when_searching : styles.NavBar}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <SearchIcon
          className={styles.searchIcon}
          onClick={() => setIsSearching(!isSearching)}
        />
        {isSearching && (
          <input placeholder="Search menu" className={styles.searchInput} />
        )}
      </div>
      {isSearching && (
        <div
          onClick={() => setIsSearching(!isSearching)}
          className={styles.cancelButton}
        >
          Cancel
        </div>
      )}
    </div>
  );
};

export default NavBar;
