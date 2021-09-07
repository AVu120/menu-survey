import CloseIcon from "mdi-react/CloseCircleIcon";
import styles from "./NavBarButtons.module.scss";

interface INavBarButtonsProps {
  searchQuery: string;
  setSearchQuery: Function;
  setIsSearching: Function;
}
const NavBarButtons = ({
  searchQuery,
  setSearchQuery,
  setIsSearching,
}: INavBarButtonsProps) => {
  return (
    <div className={styles.NavBarButtons}>
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
  );
};

export default NavBarButtons;
