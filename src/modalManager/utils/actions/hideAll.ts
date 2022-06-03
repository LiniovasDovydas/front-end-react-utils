import { modalDispatcher } from "../../modalManagerContext";

export function hideAll() {
  return modalDispatcher.dispatch({ type: "HIDE_ALL_MODALS" });
}
