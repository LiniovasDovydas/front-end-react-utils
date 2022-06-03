import { ModalStore } from "../../modalManagerContext";
import { useModal as useInternalModal } from "../../hooks/useModal";
import type { ModalStoreEntryRegister } from "../../modalManager.types";
import { useModalHelpers as useInternalHelpers } from "../../hooks/useModalHelpers";

export function createModal<
  P extends Record<string, unknown> = Record<string, unknown>
>(options: ModalStoreEntryRegister<P>) {
  const { component: Component, uid, defaultProps } = options;

  /** Register modal to the store */
  ModalStore[uid] = { component: Component, defaultProps };

  const useModal = () => useInternalModal<P>(uid);
  const useModalProps = () => useInternalModal<P>(uid)?.props ?? {};
  const useModalHelpers = () => useInternalHelpers<P>(uid);

  return { useModal, useModalProps, useModalHelpers };
}
