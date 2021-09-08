import styles from "./NavBar.module.scss";
import { ChangeEventHandler } from "react";
import SearchBar from "./searchBar/SearchBar";
import NavBarButtons from "./navBarButtons/NavBarButtons";
import { SpringValue } from "react-spring";
import { IItemGroup } from "../../../types/restaurant";
interface INavBarProps {
  isSearching: boolean;
  setIsSearching: Function;
  searchQuery: string;
  changeSearchQuery: ChangeEventHandler<HTMLInputElement>;
  setSearchQuery: Function;
  activeTabIndex: SpringValue<number>;
  handleTabClick: Function;
  restaurantData: IItemGroup[];
}
const NavBar = ({
  isSearching,
  setIsSearching,
  searchQuery,
  changeSearchQuery,
  setSearchQuery,
  activeTabIndex,
  restaurantData,
  handleTabClick,
}: INavBarProps) => {
  return (
    <div className={isSearching ? styles.NavBar_when_searching : styles.NavBar}>
      <SearchBar
        {...{
          changeSearchQuery,
          isSearching,
          setIsSearching,
          searchQuery,
          activeTabIndex,
          restaurantData,
          handleTabClick,
        }}
      />
      {isSearching && (
        <NavBarButtons {...{ searchQuery, setSearchQuery, setIsSearching }} />
      )}
    </div>
  );
};

export default NavBar;
