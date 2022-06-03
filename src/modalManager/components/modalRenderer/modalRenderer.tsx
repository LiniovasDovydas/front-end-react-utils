import React from "react";
import { useModalHelpers } from "../../hooks/useModalHelpers";
import { ModalContext, ModalStore } from "../../modalManagerContext";

import type {
  BaseModalProps,
  ModalComponentProps,
} from "../../modalManager.types";

/** Renders a single modal */
export function ModalRenderer<
  P extends Record<string, unknown> = Record<string, unknown>
>(props: BaseModalProps<P>) {
  const { uid } = props;
  const helpers = useModalHelpers(uid);
  const Component = ModalStore[uid]?.component;

  return (
    <ModalContext.Provider value={uid}>
      <Component {...({ ...props, ...helpers } as ModalComponentProps<P>)} />
    </ModalContext.Provider>
  );
}
