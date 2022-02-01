import { InventoryActionTypes } from "./types";

import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";

import { ApplicationState } from "../index";
import inventory from "../../mockdata";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const fetchRequest: AppThunk = () => {
  
 
  return (dispatch: Dispatch): Action => {
    try {
      var object = {
        type: InventoryActionTypes.FETCH_SUCCESS,
        payload: inventory
      }
      return dispatch(object);
    } catch (e) {
      
      alert('error occurred')
      var object2 ={
        type: InventoryActionTypes.FETCH_ERROR,
      }

      return dispatch(object2);
    }
  };
};
