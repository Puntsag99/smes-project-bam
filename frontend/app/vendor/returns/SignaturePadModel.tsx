"use client";

import React, { useRef, forwardRef, Ref } from "react";
import dynamic from "next/dynamic";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const SignatureCanvasNoSSR = dynamic(() => import("react-signature-canvas"), {
  ssr: false,
});

const SignatureCanvas = forwardRef((props: any, ref: Ref<any>) => {
  return <SignatureCanvasNoSSR {...props} ref={ref} />;
});

interface Props {
  onSave: (dataUrl: string) => void;
}

export const SignaturePadModal: React.FC<Props> = ({ onSave }) => {
  const sigCanvas = useRef<any>(null);

  const clear = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
    }
  };

  const save = (close: () => void) => {
    if (!sigCanvas.current) {
      alert("Canvas бэлэн биш байна.");
      return;
    }

    if (sigCanvas.current.isEmpty && sigCanvas.current.isEmpty()) {
      alert("Гарын үсгээ зурна уу!");
      return;
    }

    if (
      typeof sigCanvas.current.getTrimmedCanvas !== "function" ||
      !sigCanvas.current.getTrimmedCanvas
    ) {
      alert("getTrimmedCanvas функц олдсонгүй!");
      return;
    }

    const trimmedCanvas = sigCanvas.current.getTrimmedCanvas();
    if (!trimmedCanvas) {
      alert("Canvas зөв гарсангүй.");
      return;
    }

    const trimmedDataURL = trimmedCanvas.toDataURL("image/png");

    if (trimmedDataURL) {
      onSave(trimmedDataURL);
      close();
    } else {
      alert("Гарын үсгийн зураг үүсгэж чадсангүй.");
    }
  };

  return (
    <Popup
      modal
      trigger={
        <button className="bg-[#103651] text-white hover:bg-[#303651] w-full px-4 py-2 rounded">
          ✍️ Энд дарж гарын үсгээ зурна уу.
        </button>
      }
      closeOnDocumentClick={false}
    >
      {(close) => (
        <div className="p-4 space-y-4 flex flex-col justify-between items-center">
          <SignatureCanvas
            ref={sigCanvas}
            canvasProps={{
              className: "signatureCanvas border border-gray-400",
              width: 500,
              height: 200,
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
