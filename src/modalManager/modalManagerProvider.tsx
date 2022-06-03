import type { PropsWithChildren } from "react";
import React, { useEffect, useReducer } from "react";
import { ModalsRenderer } from "./components/modalRenderer";
import { modalManagerReducer } from "./modalManagerReducer";
import type { ModalContextProviderProps } from "./modalManager.types";
import { modalDispatcher, ModalManagerContext } from "./modalManagerContext";

/** Modal manager provider */
export const ModalManagerProvider = ({
  children,
  enableRenderer = true,
}: PropsWithChildren<ModalContextProviderProps>) => {
  const [modals, dispatch] = useReducer(modalManagerReducer, { modals: {} });

  /** Set the dispatcher function */
  useEffect(() => {
    modalDispatcher.dispatch = dispatch;
  }, [dispatch]);

  return (
    <ModalManagerContext.Provider value={modals}>
      {children}
      {enableRenderer && <ModalsRenderer />}
    </ModalManagerContext.Provider>
  );
};
