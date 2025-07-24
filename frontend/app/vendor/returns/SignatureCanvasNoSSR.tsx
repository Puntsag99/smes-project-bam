"use client";

import React, {
  forwardRef,
  useEffect,
  useState,
  type ForwardedRef,
} from "react";
import type SignatureCanvas from "react-signature-canvas";

type SignatureCanvasProps = {
  penColor?: string;
  backgroundColor?: string;
  velocityFilterWeight?: number;
  minWidth?: number;
  maxWidth?: number;
  throttle?: number;
  onBegin?: () => void;
  onEnd?: () => void;
  clearOnResize?: boolean;
  canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement>;
};

const SignatureCanvasNoSSR = forwardRef<SignatureCanvas, SignatureCanvasProps>(
  (props, ref) => {
    const [Component, setComponent] =
      useState<
        React.ComponentType<
          SignatureCanvasProps & { ref: ForwardedRef<SignatureCanvas> }
        >
      >();

    useEffect(() => {
      import("react-signature-canvas").then((mod) => {
        const SignaturePad = mod.default;
        setComponent(() =>
          forwardRef<SignatureCanvas, SignatureCanvasProps>((props, ref) => (
            <SignaturePad {...props} ref={ref} />
          ))
        );
      });
    }, []);

    if (!Component) return null;

    return <Component {...props} ref={ref} />;
  }
);

SignatureCanvasNoSSR.displayName = "SignatureCanvasNoSSR";

export default SignatureCanvasNoSSR;
