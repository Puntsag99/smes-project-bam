"use client";

import React, { useRef, useState } from "react";
import dynamic from "next/dynamic";
import type SignatureCanvas from "react-signature-canvas";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SignatureCanvasNoSSR = dynamic(
  () =>
    import("react-signature-canvas").then((mod) => {
      const SignatureCanvas = mod.default;

      const Forwarded = React.forwardRef<
        SignatureCanvas,
        React.ComponentProps<typeof SignatureCanvas>
      >((props, ref) => <SignatureCanvas ref={ref} {...props} />);

      Forwarded.displayName = "SignatureCanvasWithRef";
      return Forwarded;
    }),
  { ssr: false }
);

interface Props {
  onSave: (dataUrl: string) => void;
}

export const SignaturePadModal: React.FC<Props> = ({ onSave }) => {
  const sigCanvas = useRef<SignatureCanvas | null>(null);
  const [open, setOpen] = useState(false);

  const clear = () => {
    sigCanvas.current?.clear();
  };

  const save = () => {
    if (!sigCanvas.current) {
      alert("Canvas бэлэн биш байна.");
      return;
    }

    if (sigCanvas.current.isEmpty()) {
      alert("Гарын үсгээ зурна уу!");
      return;
    }

    const trimmedCanvas = sigCanvas.current.getTrimmedCanvas();
    if (!trimmedCanvas) {
      alert("Canvas зөв гарсангүй.");
      return;
    }

    const dataUrl = trimmedCanvas.toDataURL("image/png");
    if (dataUrl) {
      onSave(dataUrl);
      setOpen(false);
    } else {
      alert("Гарын үсгийн зураг үүсгэж чадсангүй.");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="bg-[#103651] text-white hover:bg-[#303651] w-full px-4 py-2 rounded"
        >
          ✍️ Энд дарж гарын үсгээ зурна уу.
        </button>
      </DialogTrigger>
      <DialogContent className="space-y-4 bg-white">
        <DialogHeader>
          <DialogTitle>Гарын үсэг зурж хадгалах</DialogTitle>
        </DialogHeader>
        <SignatureCanvasNoSSR
          ref={sigCanvas}
          canvasProps={{
            className: "border border-gray-400 rounded w-full",
            width: 500,
            height: 200,
          }}
        />
        <div className="flex justify-end gap-2">
          <button
            onClick={save}
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
            onClick={() => setOpen(false)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Хаах
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
