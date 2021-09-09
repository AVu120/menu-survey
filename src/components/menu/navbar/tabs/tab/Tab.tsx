import { IComponentMeasurements } from "../../../../../types/common";
import { withContentRect } from "react-measure";
import styles from "./Tab.module.scss";

const MeasurableTab = withContentRect("offset")<any>(
  ({ measureRef, ...props }) => (
    <div className={styles.Tab} ref={measureRef} {...props}></div>
  )
);

interface ITabProps {
  handleLayout: Function;
  onClick: (index: number) => void;
  index: number;
  children?: any;
}

interface IHandleResizeParams {
  offset: IComponentMeasurements;
}

const Tab = ({ handleLayout, index, onClick, ...props }: ITabProps) => {
  /**
   * @description Measures dimensions of component on mount.
   * @param bounds Dimensions of components on mount.
   */
  const handleResize = ({ offset }: IHandleResizeParams) => {
    if (offset) {
      handleLayout(index, offset);
    }
  };

  const handleClick = () => {
    if (onClick) {
      onClick(index);
    }
  };

  return (
    <MeasurableTab onResize={handleResize} onClick={handleClick} {...props} />
  );
};

export default Tab;
