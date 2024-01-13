import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import BrandCard from "../components/BrandCard";
import BrandModal from "../components/BrandModal";

const Brand = () => {
  // const { getFirms, getSales } = useStockCalls();
  const { getBrands } = useStockCalls();
  const { brands } = useSelector((state) => state.stock);

  const [info, setInfo] = useState({
    name: "",
    image: "",
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({ name: "", image: "" });
  };

  useEffect(() => {
    getBrands("brands");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Brands
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        NEW BRAND
      </Button>

      <BrandModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />

      <Grid container gap={2} mt={3} justifyContent={"center"}>
        {brands?.map((brand) => (
          <Grid item key={brand._id}>
            <BrandCard
              brand={brand}
              handleOpen={handleOpen}
              setInfo={setInfo}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Brand;
