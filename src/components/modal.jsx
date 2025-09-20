import React, { forwardRef } from "react";

const Modal = forwardRef(({ onClose, children, modalId }, ref) => (
  <div
    ref={ref}
    className="fixed inset-0 flex items-center justify-center bg-black/50 z-50"
    data-blendy-to={modalId}
  >
    <div className="bg-white p-6 rounded shadow-lg w-200">
      {children}
      <button
        onClick={onClose}
        className="bg-red-500 text-white mt-4 px-3 py-1 rounded"
      >
        Cerrar
      </button>
    </div>
  </div>
));

export default Modal;