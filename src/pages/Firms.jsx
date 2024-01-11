import { Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import FirmCard from "../components/FirmCard";

const Firm = () => {
  // const { getFirms, getSales } = useStockCalls();
  const { getStocks } = useStockCalls();
  const { firms } = useSelector((state) => state.stock);

  useEffect(() => {
    // getFirms();
    // getSales();
    getStocks("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      <Button variant="contained">NEW FIRM</Button>
      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {firms?.map((firm) => (
          <Grid item key={firm._id}>
            <FirmCard firm={firm} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Firm;
