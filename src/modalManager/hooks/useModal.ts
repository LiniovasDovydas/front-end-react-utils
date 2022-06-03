import { useModalHelpers } from "./useModalHelpers";
import type { BaseModalProps } from "../modalManager.types";
import { useModalManagerContext } from "./useModalManagerContext";

export function useModal<
  P extends Record<string, unknown> = Record<string, unknown>
>(uid: string) {
  const ctx = useModalManagerContext();
  const helpers = useModalHelpers(uid);
  return {
    ...helpers,
    ...(ctx.modals[uid] as BaseModalProps<P>),
  };
}
