import { useContext } from "react";
import { useModal } from "./useModal";
import { useModalHelpers } from "./useModalHelpers";
import { ModalContext } from "../modalManagerContext";

export function useCurrentModal<
  P extends Record<string, unknown> = Record<string, unknown>
>() {
  const ctx = useContext(ModalContext);
  const helpers = useModalHelpers<P>(ctx);
  const modal = useModal<P>(ctx);

  if (!ctx) {
    throw new Error(`[MODALS]: Using modal context outside modal.`);
  }

  return {
    ...modal,
    ...helpers,
    props: (modal.props ?? {}) as P,
  };
}
