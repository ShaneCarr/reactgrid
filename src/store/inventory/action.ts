import { InventoryActionTypes } from "./types";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "../index";
import inventory from "../../mockdata";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const fetchRequest: AppThunk = () => {
  alert('3')
  return (dispatch: Dispatch): Action => {
    try {
      return dispatch({
        type: InventoryActionTypes.FETCH_SUCCESS,
        payload: inventory
      });
    } catch (e) {
      alert('4')
      return dispatch({
        type: InventoryActionTypes.FETCH_ERROR
      });
    }
  };
};
