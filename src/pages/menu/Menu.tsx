import { useHistory, useParams } from "react-router-dom";
import { itemNameToDisplayName } from "../../utils/dataMappings/itemNameToDisplayName";
import { restaurantNameToDisplayName } from "../../utils/dataMappings/restaurantNameToDisplayName";
import styles from "./Menu.module.scss";
interface IMenuParams {
  restaurant: string;
}
const Menu = () => {
  const history = useHistory();
  const { restaurant }: IMenuParams = useParams();
  const restaurantDisplayName = restaurantNameToDisplayName[restaurant || "restaurant1"]

  const selectItem = (e: React.ChangeEvent<HTMLSelectElement>) =>
    history.push(`/${restaurant}/${e.target.value}`);

  return (
    <div className={styles.Menu}>
      {restaurantDisplayName ? (
        <>
          <h1>{restaurantDisplayName}</h1>
          <h2>Select your item:</h2>
          <select onChange={selectItem}>
            <option selected disabled style={{ display: "none" }}></option>
            {Object.keys(itemNameToDisplayName).map((key: string) => (
              <option key={`menu-item-${key}`} value={key}>
                {itemNameToDisplayName[key]}
              </option>
            ))}
          </select>
        </>
      ) : (
        <div>
          <h1>Restaurant does not exist.</h1>
        </div>
      )}
    </div>
  );
};

export default Menu;
