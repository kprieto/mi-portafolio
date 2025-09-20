import React, { useRef, useState, useEffect } from "react";
import { createBlendy } from "blendy";
import "../css/effect.css"; 
import { createPortal } from 'react-dom';
import Modal from "./modal";

function ModalBlendy({ modalId = "defaultModal", buttonText = "Temas", children }) {
  const blendy = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  // Inicializar blendy una sola vez
  useEffect(() => {
    blendy.current = createBlendy({
      animation: "dynamic",
      autoToggle: false,
    });
  }, []);

  // Abrir modal cuando showModal cambie a true
  useEffect(() => {
    if (showModal && modalRef.current) {
      requestAnimationFrame(() => {
        blendy.current?.toggle(modalId);
      });
    }
  }, [showModal, modalId]);

  const handleClose = () => {
    if (!modalRef.current) return;

    blendy.current?.untoggle(modalId, () => {
      // Retardar el desmontaje para que termine la animación
      setTimeout(() => setShowModal(false), 300);
    });
  };

  return (
    <div className="inline-block mx-2">
      {/* Modal */}
      {showModal &&
        createPortal(
          <Modal ref={modalRef} onClose={handleClose} modalId={modalId}>
            {children}
          </Modal>,
          document.body
        )}

      {/* Botón que abre el modal */}
      <button
        className="bg-sky-500 text-white px-4 py-2 rounded"
        data-blendy-from={modalId}
        onClick={() => setShowModal(true)}
      >
        <span>{buttonText}</span>
      </button>
    </div>
  );
}

export default ModalBlendy;