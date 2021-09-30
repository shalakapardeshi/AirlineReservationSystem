import {
  ADDADMIN_FAIL,
  ADDADMIN_REQUEST,
  ADDADMIN_SUCCESS,
} from "../constants/SuperAdminConstants";
import axios from "axios";

export const addAdmin = (firstName, lastName, email, password, mobileNo) => {
  return (dispatch) => {
    dispatch({
      type: ADDADMIN_REQUEST,
    });

    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const body = {
      firstName,
      lastName,
      email,
      password,
      mobileNo,
      status: 1,
    };
    const url = "http://localhost:8080/superadmin/add_admin";
    axios
      .post(url, body, header)
      .then((response) => {
        dispatch({
          type: ADDADMIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: ADDADMIN_FAIL,
          payload: error,
        });
      });
  };
};
