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

export default function FirmCard({ firm, handleOpen, setInfo }) {
  const { deleteStock } = useStockCalls();
  return (
    <Card
      sx={{
        maxWidth: 345,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        width: "300px",
        height: "450px",
        p: 2,
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        borderRadius: "40px",
        transition: "all 0.5s ease-in-out",
        border: "3px solid #000",
        ":hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {firm?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {firm?.address}
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        alt={firm?.name}
        height="140"
        image={firm?.image}
        sx={{ objectFit: "contain" }}
      />
      <Typography variant="body2" color="text.secondary">
        {firm?.phone}
      </Typography>
      <CardActions>
        <DeleteOutlineIcon
          sx={btnStyle}
          onClick={() => deleteStock("firms", firm?._id)}
        />
        <EditIcon
          sx={btnStyle}
          onClick={() => {
            handleOpen();
            setInfo(firm);
          }}
        />
      </CardActions>
    </Card>
  );
}
