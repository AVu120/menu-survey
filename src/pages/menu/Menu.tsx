import { useParams } from "react-router";
import { restaurantData } from "../../utils/mockData/restaurants";
import { ChangeEvent, createContext, useState } from "react";
import NavBar from "../../components/menu/navbar/NavBar";
import ItemGroupList from "../../components/menu/itemGroupList/ItemGroupList";

export const RestaurantContext = createContext("restaurant1");

const Menu = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { restaurant }: { restaurant: string } = useParams();

  const changeSearchQuery = (e: ChangeEvent<HTMLInputElement>): void =>
    setSearchQuery(e.target.value);

  return (
    <RestaurantContext.Provider
      value={restaurantData[restaurant] ? restaurant : "restaurant1"}
    >
      <NavBar
        {...{
          isSearching,
          setIsSearching,
          searchQuery,
          changeSearchQuery,
          setSearchQuery,
        }}
      />
      <ItemGroupList {...{ restaurantData, restaurant, searchQuery }} />
    </RestaurantContext.Provider>
  );
};

export default Menu;
