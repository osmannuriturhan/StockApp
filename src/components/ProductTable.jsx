import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import useStockCalls from "../service/useStockCalls";

export default function ProductTable() {
  const { deleteStock } = useStockCalls();
  const { products } = useSelector((state) => state.stock);

  const getRowId = (row) => row._id;
  const columns = [
    {
      field: "_id",
      headerName: "#",
      flex: 1.4,
      headerAlign: "center",
      sortable: false,
    },
    {
      field: "categoryId",
      headerName: "Category",
      flex: 1,
      headerAlign: "center",
      valueGetter: (props) => {
        return props.row?.categoryId?.name;
      },
    },
    {
      field: "brandId",
      headerName: "Brand",
      flex: 1.2,
      headerAlign: "center",
      valueGetter: (props) => props.row?.brandId?.name,
    },
    {
      field: "name",
      headerName: "Name",
      type: "text",
      flex: 1.5,
      headerAlign: "center",
    },
    {
      field: "quantity",
      headerName: "Stock",
      type: "number",
      flex: 1.5,
      headerAlign: "center",
    },
    {
      field: "actions",
      type: "actions",
      getActions: (props) => [
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          onClick={() => deleteStock("products", props.id)}
          label="Delete"
        />,
      ],
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        getRowId={getRowId}
      />
    </Box>
  );
}
