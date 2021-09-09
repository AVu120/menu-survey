import { useState, useEffect } from "react";
import { IItemGroup } from "../../../../types/restaurant";
import { IComponentMeasurements } from "../../../../types/common";
import Tab from "./tab/Tab";
import styles from "./Tabs.module.scss";

interface ITabsProps {
  handleTabClick: (index: number) => void;
  restaurantData: IItemGroup[];
}

const Tabs = ({ handleTabClick, restaurantData }: ITabsProps) => {
  const [shouldDisplayScrollbar, setShouldDisplayScrollbar] = useState(false);
  const [tabWidths, setTabWidths] = useState(() =>
    restaurantData.map((_: IItemGroup) => 0)
  );

  /**
   * @description Calculation initial tab widths on mount.
   * @param index
   * @param offset
   */
  const calculateTabWidths = (
    index: number,
    offset: IComponentMeasurements
  ) => {
    setTabWidths((currentTabWidths: number[]): number[] =>
      currentTabWidths.map((curr: number, i: number): number =>
        i === index ? offset.width : curr
      )
    );
  };

  useEffect(() => {
    const totalTabsWidth = tabWidths.reduce(
      (acc: number, curr: number): number => acc + curr,
      0
    );
    setShouldDisplayScrollbar(totalTabsWidth > window.innerWidth);
  }, [tabWidths]);

  return (
    <div
      className={
        shouldDisplayScrollbar ? styles.Tabs : styles.TabsWithoutScrollbar
      }
    >
      {restaurantData.map(({ title }: { title: string }, i: number) => (
        <Tab
          key={title}
          onClick={handleTabClick}
          index={i}
          handleLayout={calculateTabWidths}
        >
          {title}
        </Tab>
      ))}
    </div>
  );
};

export default Tabs;
