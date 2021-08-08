import { useHistory } from "react-router-dom";
import { itemNameToDisplayName } from "../../utils/dataMappings";

const Menu = () => {
  const history = useHistory();

  const selectItem = (e: React.ChangeEvent<HTMLSelectElement>) =>
    history.push(`/survey/${e.target.value}`);

  return (
    <div>
      <h2>Select your item:</h2>
      <select onChange={selectItem}>
        <option selected disabled style={{ display: "none" }}></option>
        {Object.keys(itemNameToDisplayName).map((key: string) => (
          <option key={`menu-item-${key}`} value={key}>
            {itemNameToDisplayName[key]}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Menu;
