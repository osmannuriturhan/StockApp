import { useDispatch } from "react-redux";
import { fetchFail, fetchStart, getFirmsSuccess } from "../features/stockSlice";
import { toastErrorNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";

const useStockCalls = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  const getFirms = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken("/firms/");
      dispatch(getFirmsSuccess(data));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Firma bilgileri çekilemedi.");
      console.log(error);
    }
  };
  return { getFirms };
};

export default useStockCalls;
