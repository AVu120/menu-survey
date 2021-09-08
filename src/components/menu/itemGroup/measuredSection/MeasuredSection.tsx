import { withContentRect } from "react-measure";
import styles from "./MeasuredSection.module.scss";

const MeasurableSection = withContentRect("offset")<any>(
  ({ measureRef, ...props }) => (
    <section className={styles.MeasuredSection} ref={measureRef} {...props} />
  )
);

interface ISectionProps {
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

const MeasuredSection = ({
  handleSectionLayout,
  index,
  ...props
}: ISectionProps) => {
  const handleResize = ({ offset }: IHandleResizeParams) => {
    if (offset) {
      handleSectionLayout(index, offset);
    }
  };
  return <MeasurableSection onResize={handleResize} {...props} />;
};

export default MeasuredSection;
