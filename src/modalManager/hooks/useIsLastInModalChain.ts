import { useCurrentModal } from "./useCurrentModal";
import { useModalManagerContext } from "./useModalManagerContext";

export function useIsLastInModalChain() {
  const { uid } = useCurrentModal();
  const { modals } = useModalManagerContext();

  const visibleModals = Object.values(modals).filter(
    (modal) => !!modal.isVisible
  );

  return (
    visibleModals.length > 0 &&
    visibleModals?.[visibleModals.length - 1].uid === uid
  );
}
