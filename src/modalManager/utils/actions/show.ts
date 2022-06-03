import { modalDispatcher } from "../../modalManagerContext";

export function show(uid: string) {
  return modalDispatcher.dispatch({ type: "SHOW_MODAL", payload: uid });
}
