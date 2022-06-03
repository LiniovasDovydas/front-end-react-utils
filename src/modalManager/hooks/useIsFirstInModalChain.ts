import { useCurrentModal } from "./useCurrentModal";
import { useModalManagerContext } from "./useModalManagerContext";

export function useIsFirstInModalChain() {
  const { uid } = useCurrentModal();
  const { modals } = useModalManagerContext();

  const visibleModals = Object.values(modals).filter(
    (modal) => !!modal.isVisible
  );

  return visibleModals.length > 0 && visibleModals?.[0].uid === uid;
}
