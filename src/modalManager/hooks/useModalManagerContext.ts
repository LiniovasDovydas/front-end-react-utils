import { useContext } from "react";
import { ModalManagerContext } from "../modalManagerContext";

/** Returns modal manager context */
export function useModalManagerContext() {
  const ctx = useContext(ModalManagerContext);

  if (!ctx) {
    throw new Error(
      "[MODALS]: Using modal context outside of context provider."
    );
  }

  return ctx;
}
