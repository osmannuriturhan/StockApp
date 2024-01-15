import { Alert } from "@mui/material";

export const ErrorMsg = () => {
  return <Alert severity="error">Veriler çekilemedi.</Alert>;
};

export const NoDataMsg = () => {
  return <Alert severity="warning">Gösterilecek bir veri bulunamadı.</Alert>;
};

const DataFetchMsg = () => {
  return <div>DataFetchMsg</div>;
};

export default DataFetchMsg;
