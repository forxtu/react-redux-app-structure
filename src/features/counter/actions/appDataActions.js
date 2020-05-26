import { FETCH_INIT_DATA } from "../types/appDataTypes";

const setInitData = data => ({
  type: FETCH_INIT_DATA,
  data
});

export { setInitData };
