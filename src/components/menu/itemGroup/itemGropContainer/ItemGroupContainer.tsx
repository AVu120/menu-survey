import { withContentRect } from "react-measure";
import styles from "./ItemGroupContainer.module.scss";

// MeasurableSection (react-measure) component with onResize attribute which is a
// on-mount handler that produces the on-mount dimensions aka offset.
const MeasurableSection = withContentRect("offset")<any>(
  ({ measureRef, ...props }) => (
    <section
      className={styles.ItemGroupContainer}
      ref={measureRef}
      {...props}
    />
  )
);

interface IItemGroupContainerProps {
  handleSectionLayout: Function;
  index: number;
}

interface IComponentMeasurements {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface IHandleResizeParams {
  offset: IComponentMeasurements;
}

const ItemGroupContainer = ({
  handleSectionLayout,
  index,
  ...props
}: IItemGroupContainerProps) => {
  /**
   * @description Measures dimensions of component on mount.
   * @param bounds Dimensions of components on mount.
   */
  const handleResize = ({ offset }: IHandleResizeParams) => {
    if (offset) {
      handleSectionLayout(index, offset);
    }
  };
  return <MeasurableSection onResize={handleResize} {...props} />;
};

export default ItemGroupContainer;
