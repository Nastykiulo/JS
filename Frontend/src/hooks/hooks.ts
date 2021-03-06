import { useContext } from "react";
import { Context } from "../context/context";
import { ActionTypes } from "../context/actionTypes";

export const useStore = () => useContext(Context);

export const useLoader = () => {
  const { state, dispatch } = useStore();

  const showLoader = () => dispatch({ type: ActionTypes.SHOW_LOADER });

  const hideLoader = () => dispatch({ type: ActionTypes.HIDE_LOADER });

  return {
    loading: state.loading,
    showLoader,
    hideLoader,
  };
};

// export const URL = "http://localhost:8081";
