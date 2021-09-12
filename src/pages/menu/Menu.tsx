import { ChangeEvent, createContext, useRef, useState, useEffect } from "react";
import { useParams } from "react-router";
import ItemGroupList from "../../components/menu/itemGroupList/ItemGroupList";
import NavBar from "../../components/menu/navbar/NavBar";
import { restaurantData } from "../../data/mockData/restaurants";
import { IItemGroup } from "../../types/restaurant";
import styles from "./Menu.module.scss";

export const MenuContext = createContext<any>(null);

const Menu = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalTabsWidth, setTotalTabsWidth] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const { restaurant }: { restaurant: string } = useParams();
  const menu = restaurantData[restaurant] || restaurantData["restaurant1"];
  const tabScrollAnchors = useRef(menu.map((_: IItemGroup) => 0));

  const contentContainer = useRef<any>(null);
  const handleTabClick = (i: number): void => {
    if (contentContainer.current) {
      contentContainer.current.scrollTo({
        top: tabScrollAnchors.current[i] - 30,
        behavior: "smooth",
      });
    }
  };

  const changeSearchQuery = (e: ChangeEvent<HTMLInputElement>): void =>
    setSearchQuery(e.target.value);

  /**
   * @description Calculates anchor coordinates/position of each item group on menu mount. These are used
   * to allow the user to automatically scroll to an item group title when they
   * click on the corresponding title tab in tabs in the navbar.
   * @param index index of item group.
   * @param offset dimension of that item group.
   */
  const calculateTabScrollAnchors = (index: number, offset: any): any => {
    tabScrollAnchors.current[index] = offset.top;
  };

  // Display tabs scrollbar only when total tabs width > screen width.
  useEffect(() => {
    const onResize = () => setScreenWidth(window.innerWidth);

    if (totalTabsWidth) {
      setScreenWidth(window.innerWidth);
      window.addEventListener("resize", onResize);
    }

    return () => window.removeEventListener("resize", onResize);
  }, [totalTabsWidth]);

  return (
    <MenuContext.Provider
      value={{
        restaurant: restaurantData[restaurant] ? restaurant : "restaurant1",
        setTotalTabsWidth,
        totalTabsWidth,
        screenWidth,
      }}
    >
      <NavBar
        {...{
          isSearching,
          setIsSearching,
          searchQuery,
          changeSearchQuery,
          setSearchQuery,
          handleTabClick,
          totalTabsWidth,
          screenWidth,
        }}
        restaurantData={menu}
      />
      <div ref={contentContainer} className={styles.ItemGroupListContainer}>
        <ItemGroupList
          {...{
            restaurant,
            searchQuery,
            handleLayout: calculateTabScrollAnchors,
          }}
          restaurantData={menu}
        />
      </div>
    </MenuContext.Provider>
  );
};

export default Menu;
