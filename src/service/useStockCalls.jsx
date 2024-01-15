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

  const postStock = async (url = "firms", info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/${url}/`, info);
      toastSuccessNotify(`${url} kaydı eklenmiştir.`);
      getStocks(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} kaydı eklenememiştir.`);
    }
  };

  const putStock = async (url = "firms", info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/${url}/${info._id}`, info);
      toastSuccessNotify(`${url} kaydı güncellenmiştir.`);
      getStocks(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify(`${url} kaydı güncellenememiştir.`);
    }
  };

  // const getBrands = async (url = "brands") => {
  //   dispatch(fetchStart());
  //   try {
  //     const { data } = await axiosWithToken(`/${url}/`);
  //     const apiData = data.data;
  //     dispatch(getStockSuccess({ apiData, url }));
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify(`${url} bilgileri çekilemedi.`);
  //     console.log(error);
  //   }
  // };

  // const postBrand = async (url = "brands", info) => {
  //   dispatch(fetchStart());
  //   try {
  //     await axiosWithToken.post(`/${url}/`, info);
  //     toastSuccessNotify(`${url} kaydı eklenmiştir.`);
  //     getStocks(url);
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify(`${url} kaydı eklenememiştir.`);
  //   }
  // };

  // const putBrand = async (url = "brands", info) => {
  //   dispatch(fetchStart());
  //   try {
  //     await axiosWithToken.put(`/${url}/${info._id}`, info);
  //     toastSuccessNotify(`${url} kaydı güncellenmiştir.`);
  //     getStocks(url);
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify(`${url} kaydı güncellenememiştir.`);
  //   }
  // };

  // const deleteBrand = async (url = "brands", id) => {
  //   dispatch(fetchStart());
  //   try {
  //     await axiosWithToken.delete(`/${url}/${id}`);
  //     toastSuccessNotify(`${url} bilgisi silindi.`);
  //     getStocks(url);
  //   } catch (error) {
  //     dispatch(fetchFail());
  //     toastErrorNotify(`${url} silinemedi.`);
  //   }
  // };

  return {
    getStocks,
    deleteStock,
    postStock,
    putStock,
    // getBrands,
    // postBrand,
    // putBrand,
    // deleteBrand,
  };
};

export default useStockCalls;
