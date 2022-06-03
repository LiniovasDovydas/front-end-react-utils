import { modalDispatcher } from "../../modalManagerContext";
import type { ModalContextUpdatePayload } from "../../modalManager.types";

export function update<
  P extends Record<string, unknown> = Record<string, unknown>
>(payload: ModalContextUpdatePayload<P>) {
  return modalDispatcher.dispatch({ type: "UPDATE_MODAL", payload });
}
