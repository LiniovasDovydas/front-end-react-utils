import React from "react";
import { ModalRenderer } from "./modalRenderer";
import { useModalManagerContext } from "../../hooks/useModalManagerContext";

export const ModalsRenderer = () => {
  const { modals } = useModalManagerContext();

  return (
    <>
      {Object.values(modals).map((modal) => (
        <ModalRenderer {...modal} key={modal.uid} />
      ))}
    </>
  );
};
