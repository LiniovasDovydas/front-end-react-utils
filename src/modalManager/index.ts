/** Export the provider */
export { modalDispatcher } from "./modalManagerContext";
export { ModalManagerProvider } from "./modalManagerProvider";

/** Export the renderer */
export { ModalsRenderer } from "./components/modalRenderer";

/** Export hooks */
export { useModalManagerContext } from "./hooks/useModalManagerContext";
export { useCurrentModal } from "./hooks/useCurrentModal";
export { useModalHelpers } from "./hooks/useModalHelpers";
export { useModal } from "./hooks/useModal";

/** Export utils */
export { createModal } from "./utils/createModal";
export { hide as hideModal } from "./utils/actions/hide";
export { show as showModal } from "./utils/actions/show";
export { update as updateModal } from "./utils/actions/update";
export { hideAll as hideAllModals } from "./utils/actions/hideAll";

/** Export types */
export * from "./modalManager.types";
