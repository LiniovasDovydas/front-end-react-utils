import type { ComponentType, Dispatch } from "react";
import type { ModalHelpersReturn } from "./hooks/useModalHelpers";

export interface BaseModalProps<
  P extends Record<string, unknown> = Record<string, unknown>
> {
  /** Modal unique id */
  uid: string;
  /** Modal component props */
  props?: P;
  /** Is modal visible */
  isVisible?: boolean;
}

export interface ModalContextState {
  modals: Record<string, BaseModalProps>;
}

export interface ModalContextProviderProps {
  /**
   * Whether modals should be rendered at root of the provider,
   * if `false` then add `<ModalRenderer />` deeper in
   * the component tree (def. true)
   */
  enableRenderer?: boolean;
}

export type ModalContextUpdatePayload<
  P extends Record<string, unknown> = Record<string, unknown>
> = {
  uid: string;
  props: P;
};

export type ModalContextActions<
  P extends Record<string, unknown> = Record<string, unknown>
> =
  | {
      type: "UPDATE_MODAL";
      payload: ModalContextUpdatePayload<P>;
    }
  | {
      type: "SHOW_MODAL";
      payload: string;
    }
  | {
      type: "HIDE_MODAL";
      payload: string;
    }
  | {
      type: "HIDE_ALL_MODALS";
    };

export type ModalContextDispatch = Dispatch<ModalContextActions>;

/** Modal store */
export type ModalComponentProps<
  P extends Record<string, unknown> = Record<string, unknown>
> = ModalHelpersReturn<P> & Required<BaseModalProps<P>>;

export interface ModalStoreEntry<
  P extends Record<string, unknown> = Record<string, unknown>
> {
  defaultProps?: P;
  component: ComponentType<ModalComponentProps<P>>;
}

export interface ModalStoreEntryRegister<
  P extends Record<string, unknown> = Record<string, unknown>
> extends ModalStoreEntry<P> {
  uid: string;
}
