import { useModal } from "./useModal";

/**
 * Returns whether provided modal
 * is visible
 */
export function useModalVisible(uid: string) {
  const { isVisible } = useModal(uid);
  return isVisible;
}
