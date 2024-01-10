import { Button, Typography } from "@mui/material";
import { useEffect } from "react";
import useStockCalls from "../service/useStockCalls";

const Firm = () => {
  const { getFirms } = useStockCalls();

  useEffect(() => {
    getFirms();
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firms
      </Typography>
      <Button variant="contained">NEW FIRM</Button>
    </div>
  );
};

export default Firm;
