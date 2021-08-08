import { useParams } from "react-router-dom";

const Survey = () => {
  const { item }: { item: string } = useParams();
  return (
    <div>
      <h2>Survey Page for {item}</h2>
    </div>
  );
};

export default Survey;
