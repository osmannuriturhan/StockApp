import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getStockSuccess } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useStockCalls = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  //   const getFirms = async () => {
  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axiosWithToken("/firms/");
  //       dispatch(getFirmsSuccess(data));
  //     } catch (error) {
  //       dispatch(fetchFail());
  //       toastErrorNotify("Firma bilgileri çekilemedi.");
  //       console.log(error);
  //     }
  //   };

  //   const getSales = async () => {
  //     dispatch(fetchStart());
  //     try {
  //       const { data } = await axiosWithToken("/sales/");
  //       dispatch(getSalesSuccess(data));
  //     } catch (error) {
  //       dispatch(fetchFail());
  //       toastErrorNotify("Sales bilgileri çekilemedi.");
  //       console.log(error);
  //     }
  //   };

  const getStocks = async (url = "firms") => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/${url}/`);
      const apiData = data.data;
      dispatch(getStockSuccess({ apiData, url }));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} bilgileri çekilemedi.`);
      console.log(error);
    }
  };

  const deleteStock = async (url = "firms", id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/${url}/${id}`);
      toastSuccessNotify(`${url} bilgisi silindi.`);
      getStocks(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} silinemedi.`);
    }
  };

  return { getStocks, deleteStock };
};

export default useStockCalls;
