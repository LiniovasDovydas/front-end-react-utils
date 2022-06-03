import { ModalStore } from "./modalManagerContext";

import type {
  ModalContextActions,
  ModalContextState,
} from "./modalManager.types";

export function modalManagerReducer(
  state: ModalContextState,
  action: ModalContextActions
): ModalContextState {
  switch (action.type) {
    case "UPDATE_MODAL": {
      if (
        !state.modals[action.payload.uid] ||
        !ModalStore[action.payload.uid]
      ) {
        return state;
      }

      return {
        ...state,
        modals: {
          ...state.modals,
          [action.payload.uid]: {
            ...state.modals[action.payload.uid],
            props: {
              ...state.modals[action.payload.uid].props,
              ...action.payload.props,
            },
          },
        },
      };
    }
    case "SHOW_MODAL": {
      if (!ModalStore[action.payload]) {
        return state;
      }

      return {
        ...state,
        modals: {
          ...state.modals,
          [action.payload]: {
            ...state.modals[action.payload],
            props: ModalStore[action.payload].defaultProps,
            uid: action.payload,
            isVisible: true,
          },
        },
      };
    }
    case "HIDE_MODAL": {
      if (!ModalStore[action.payload]) {
        return state;
      }

      return {
        ...state,
        modals: {
          ...state.modals,
          [action.payload]: {
            ...state.modals[action.payload],
            uid: action.payload,
            isVisible: false,
          },
        },
      };
    }
    case "HIDE_ALL_MODALS": {
      const newerState = { ...state };

      Object.keys(newerState.modals).forEach((uid) => {
        newerState.modals[uid].isVisible = false;
      });

      return newerState;
    }
    default:
      return state;
  }
}
