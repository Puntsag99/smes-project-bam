"use client";

import React, { forwardRef, useEffect, useState } from "react";
import type SignatureCanvas from "react-signature-canvas";

const SignatureCanvasNoSSR = forwardRef<
  SignatureCanvas,
  React.ComponentProps<"canvas"> & {
    canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement>;
  }
>((props, ref) => {
  const [Component, setComponent] = useState<React.ComponentType<any> | null>(
    null
  );

  useEffect(() => {
    import("react-signature-canvas").then((mod) => {
      setComponent(() => mod.default);
    });
  }, []);

  if (!Component) return null;
  return <Component {...props} ref={ref} />;
});

SignatureCanvasNoSSR.displayName = "SignatureCanvasNoSSR";

export default SignatureCanvasNoSSR;
