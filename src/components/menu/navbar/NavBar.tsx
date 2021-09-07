import SearchIcon from "mdi-react/MagnifyIcon";
import CloseIcon from "mdi-react/CloseCircleIcon";
import styles from "./NavBar.module.scss";
import { ChangeEventHandler } from "react";

interface INavBarProps {
  isSearching: boolean;
  setIsSearching: Function;
  searchQuery: string;
  changeSearchQuery: ChangeEventHandler<HTMLInputElement>;
  setSearchQuery: Function;
}
const NavBar = ({
  isSearching,
  setIsSearching,
  searchQuery,
  changeSearchQuery,
  setSearchQuery,
}: INavBarProps) => {
  return (
    <div className={isSearching ? styles.NavBar_when_searching : styles.NavBar}>
      <div className={styles.searchContainer}>
        <SearchIcon
          className={styles.searchIcon}
          onClick={() => !isSearching && setIsSearching(true)}
        />
        {isSearching && (
          <input
            placeholder="Search menu"
            onChange={changeSearchQuery}
            value={searchQuery}
            className={styles.searchInput}
          />
        )}
      </div>
      {isSearching && (
        <div style={{ display: "flex", alignItems: "center" }}>
          {searchQuery && (
            <CloseIcon
              className={styles.resetButton}
              onClick={() => setSearchQuery("")}
            />
          )}
          <div
            onClick={() => {
              setIsSearching(false);
              setSearchQuery("");
            }}
            className={styles.cancelButton}
          >
            Cancel
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
