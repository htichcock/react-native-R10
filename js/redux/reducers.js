import { NavigationReducer } from "@expo/ex-navigation";
import { combineReducers } from "redux";
import about from "./modules/about";
import sessions from "./modules/sessions";
import speakers from "./modules/speakers";
export default combineReducers({
  navigation: NavigationReducer,
  about,
  sessions,
  speakers
});
