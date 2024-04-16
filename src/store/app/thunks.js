import { loadProducts } from "../../helpers/loadProducts";
import { setError, setLoading, setProducts } from "./app.slice";

export const startLoadingProducts = () => {
  return async (dispatch) => {
    // getState
    dispatch(setLoading());

    const data = await loadProducts();
    if (!data) return dispatch(setError("No se cargó los productos"));

    dispatch(setProducts(data));
  };
};
