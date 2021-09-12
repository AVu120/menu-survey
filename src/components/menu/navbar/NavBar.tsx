import { ChangeEventHandler } from "react";
import { IItemGroup } from "../../../types/restaurant";
import styles from "./NavBar.module.scss";
import NavBarButtons from "./navBarButtons/NavBarButtons";
import SearchBar from "./searchBar/SearchBar";
interface INavBarProps {
  isSearching: boolean;
  setIsSearching: Function;
  searchQuery: string;
  changeSearchQuery: ChangeEventHandler<HTMLInputElement>;
  setSearchQuery: Function;
  handleTabClick: (index: number) => void;
  restaurantData: IItemGroup[];
  totalTabsWidth: number;
  screenWidth: number;
}
const NavBar = ({
  isSearching,
  setIsSearching,
  searchQuery,
  changeSearchQuery,
  setSearchQuery,
  restaurantData,
  handleTabClick,
  totalTabsWidth,
  screenWidth,
}: INavBarProps) => {
  return (
    <nav
      className={`${isSearching ? styles.NavBarWhenSearching : styles.NavBar} ${
        totalTabsWidth > screenWidth &&
        !isSearching &&
        styles.NavBarWithScrollBar
      }`}
    >
      <SearchBar
        {...{
          changeSearchQuery,
          isSearching,
          setIsSearching,
          searchQuery,
          restaurantData,
          handleTabClick,
          totalTabsWidth,
          screenWidth,
        }}
      />
      {isSearching && (
        <NavBarButtons {...{ searchQuery, setSearchQuery, setIsSearching }} />
      )}
    </nav>
  );
};

export default NavBar;
