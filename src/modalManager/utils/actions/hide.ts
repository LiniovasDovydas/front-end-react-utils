import { modalDispatcher } from "../../modalManagerContext";

export function hide(uid: string) {
  return modalDispatcher.dispatch({ type: "HIDE_MODAL", payload: uid });
}
