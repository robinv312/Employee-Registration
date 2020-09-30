import axios from "axios";
import {
  PROFILE_ERROR,
  CLEAR_PROFILE,
  GET_PROFILES,

} from "./types";


//Get profiles
export const getProfiles = () => async (dispatch) => {
  try {
    dispatch({ type: CLEAR_PROFILE });
    const resp = await axios.get("/api/users");
    dispatch({ type: GET_PROFILES, payload: resp.data });
  } catch (err) {
    console.log(err.response);
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


