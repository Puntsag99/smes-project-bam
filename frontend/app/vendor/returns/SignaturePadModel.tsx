"use client";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import React, { useRef } from "react";
import SignaturePad from "react-signature-canvas";

interface Props {
  onSave: (dataUrl: string) => void;
}

export const SignaturePadModal: React.FC<Props> = ({ onSave }) => {
  const sigCanvas = useRef<SignaturePad | null>(null);

  const clear = () => sigCanvas.current?.clear();

  const save = (close: () => void) => {
    if (sigCanvas.current?.isEmpty()) {
      alert("Гарын үсгээ зурна уу!");
      return;
    }

    const trimmedDataURL = sigCanvas.current
      ?.getTrimmedCanvas()
      .toDataURL("image/png");

    if (trimmedDataURL) {
      onSave(trimmedDataURL);
      close();
    }
  };

  return (
    <Popup
      modal
      trigger={
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          ✍️ Энд дарж гарын үсгээ зурна уу.
        </button>
      }
      closeOnDocumentClick={false}
    >
      {(close) => (
        <div className="p-4 space-y-4">
          <SignaturePad
            ref={sigCanvas}
            canvasProps={{
              className: "signatureCanvas border border-gray-400",
            }}
          />
          <div className="space-x-2">
            <button
              onClick={() => save(close)}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Хадгалах
            </button>
            <button
              onClick={clear}
              className="bg-yellow-500 text-white px-3 py-1 rounded"
            >
              Цэвэрлэх
            </button>
            <button
              onClick={close}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Хаах
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
};
