import { createContext } from "react";

import {
  ModalContextDispatch,
  ModalContextState,
  ModalStoreEntry,
  BaseModalProps,
} from "./modalManager.types";

/** Modal manager dispatch store */
export const createModalContextDispatcher = () => {
  let internalDispatch: ModalContextDispatch;
  return {
    get dispatch() {
      return internalDispatch;
    },
    set dispatch(dispatcher: ModalContextDispatch) {
      internalDispatch = dispatcher;
    },
  };
};

/** Modal manager context */
export const ModalManagerContext = createContext<ModalContextState | null>(
  null
);

/** Single modal context */
export const ModalContext = createContext<BaseModalProps["uid"] | null>(null);

/** Modal store */
export const ModalStore: Record<
  string,
  ModalStoreEntry<Record<string, unknown>>
> = {};

/** Create dispatcher instance and export it */
export const modalDispatcher = createModalContextDispatcher();
