/* eslint-disable no-unused-vars */
import { useCallback } from "react";
import { hide } from "../utils/actions/hide";
import { show } from "../utils/actions/show";
import { update } from "../utils/actions/update";
import { hideAll } from "../utils/actions/hideAll";

export function useModalHelpers<
  P extends Record<string, unknown> = Record<string, unknown>
>(uid: string) {
  return {
    hide: useCallback(() => hide(uid), [uid]),
    show: useCallback(() => show(uid), [uid]),
    hideAll: useCallback(hideAll, []),
    update: useCallback(
      (payload: Partial<P>) =>
        update<P>({ uid, props: payload as Required<P> }),
      [uid]
    ),
  };
}

export interface ModalHelpersReturn<
  P extends Record<string, unknown> = Record<string, unknown>
> {
  hide: () => ReturnType<typeof hide>;
  hideAll: () => ReturnType<typeof hideAll>;
  show: () => ReturnType<typeof show>;
  update(payload: Partial<P>): ReturnType<typeof update>;
}
