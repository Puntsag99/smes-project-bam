"use client";

import React, { forwardRef, useEffect, useState } from "react";
import type SignatureCanvasType from "react-signature-canvas";

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

type SignatureCanvasNoSSRProps = SignatureCanvasProps & {
  canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement>;
};

const SignatureCanvasNoSSR = forwardRef<
  SignatureCanvasType,
  SignatureCanvasNoSSRProps
>((props, ref) => {
  const [Component, setComponent] = useState<React.ForwardRefExoticComponent<
    SignatureCanvasProps & React.RefAttributes<SignatureCanvasType>
  > | null>(null);

  useEffect(() => {
    import("react-signature-canvas").then((mod) => {
      const Forwarded = forwardRef<SignatureCanvasType, SignatureCanvasProps>(
        (props, ref) => <mod.default {...props} ref={ref} />
      );
      setComponent(() => Forwarded);
    });
  }, []);

  if (!Component) return null;

  return <Component {...props} ref={ref} />;
});

SignatureCanvasNoSSR.displayName = "SignatureCanvasNoSSR";

export default SignatureCanvasNoSSR;
