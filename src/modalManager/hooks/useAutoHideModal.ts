import { useEffect } from "react";
import { hide } from "../utils/actions/hide";
import { useModalVisible } from "./useModalVisible";

/**
 * Auto hides modal when provided property changes to false
 */
export function useAutoHideModal(uid: string, condition: boolean) {
  const isVisible = useModalVisible(uid);

  useEffect(() => {
    if (condition || !isVisible) {
      return;
    }

    hide(uid);
  }, [condition, isVisible, uid]);

  return null;
}
