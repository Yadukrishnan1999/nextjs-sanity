import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
};

const Modal = ({ isOpen, onClose, children, size = "md" }: ModalProps) => {
  if (!isOpen) return null;
  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-xl",
    lg: "max-w-3xl",
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 w-">
      <div
        className={`bg-white rounded-2xl shadow-xl w-full ${sizeClasses[size]} mx-4 p-4 relative`}
        role="dialog"
        aria-labelledby="Modal"
        aria-modal="true"
      >
        <button
          className="absolute top-2 right-2 text-black focus:outline-none p-2"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="mt-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
