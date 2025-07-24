"use client";

import React from "react";
import dynamic from "next/dynamic";
import type SignatureCanvas from "react-signature-canvas";

// SSR disable + forwardRef
const SignatureCanvasDynamic = dynamic(
  () =>
    import("react-signature-canvas").then((mod) => {
      const Component = mod.default;

      const Forwarded = React.forwardRef<
        SignatureCanvas,
        React.ComponentProps<typeof Component>
      >((props, ref) => <Component ref={ref} {...props} />);

      Forwarded.displayName = "ForwardedSignatureCanvas";
      return Forwarded;
    }),
  { ssr: false }
);

export default SignatureCanvasDynamic;
