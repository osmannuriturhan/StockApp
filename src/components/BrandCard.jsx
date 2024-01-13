import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import { btnStyle } from "../styles/globalStyles";
import useStockCalls from "../service/useStockCalls";

export default function BrandCard({ brand, handleOpen, setInfo }) {
  const { name, image, _id } = brand;
  const { deleteBrand } = useStockCalls();
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
        height: "400px",
        p: 2,
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt={name}
        height="140"
        image={image}
        sx={{ objectFit: "contain" }}
      />

      <CardActions>
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => deleteBrand("brands", _id)}
        />
        <EditIcon
          sx={btnStyle}
          onClick={() => {
            handleOpen();
            setInfo(brand);
          }}
        />
      </CardActions>
    </Card>
  );
}
