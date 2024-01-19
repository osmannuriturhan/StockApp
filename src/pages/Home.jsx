import Charts from "../components/Charts";
import KPI from "../components/KPI";
import { useEffect } from "react";
import useStockCalls from "../service/useStockCalls";

const Home = () => {
  const { getStocks } = useStockCalls();
  useEffect(() => {
    getStocks("sales");
    getStocks("purchases");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <KPI />
      <Charts />
    </div>
  );
};

export default Home;
