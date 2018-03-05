import { createRouter } from "@expo/ex-navigation";
import About from "../screens/About";
import Schedule from "../screens/Schedule";
import Session from "../screens/Session";
import Faves from "../screens/Faves";
import Speaker from "../screens/Speaker";

import NavigationLayout from "./NavigationLayout";

const Router = createRouter(() => ({
  layout: () => NavigationLayout,
  about: () => About,
  schedule: () => Schedule,
  session: () => Session,
  faves: () => Faves,
  speaker: () => Speaker
}));

export default Router;
