import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";

const columns = [
  {
    field: "_id",
    headerName: "#",
    flex: 1.4,
    headerAlign: "center",
    sortable: false,
  },
  {
    field: "category",
    headerName: "Category",
    flex: 1,
  },
  {
    field: "brand",
    headerName: "Brand",
    flex: 1.2,
    headerAlign: "center",
  },
  {
    field: "name",
    headerName: "Name",
    type: "text",
    flex: 1.5,
    headerAlign: "center",
  },
  {
    field: "stock",
    headerName: "Stock",
    type: "number",
    flex: 1.5,
    headerAlign: "center",
  },
  {
    field: "actions",
    headerName: "Actions",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1.5,
    headerAlign: "center",
  },
];

export default function ProductTable() {
  const { products } = useSelector((state) => state.stock);

  function getRowId(row) {
    return row._id;
  }

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
