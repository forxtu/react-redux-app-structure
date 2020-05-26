import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux
import { getAppDataSelector } from "../reducers/appDataReducer";
import { setInitData } from "../actions/appDataActions";

const useAppData = () => {
  const dispatch = useDispatch();
  const appData = useSelector(getAppDataSelector);

  const handleFetchInitData = useCallback(
    data => {
      dispatch(setInitData(data));
    },
    [dispatch]
  );

  return { appData, handleFetchInitData };
};

export default useAppData;
