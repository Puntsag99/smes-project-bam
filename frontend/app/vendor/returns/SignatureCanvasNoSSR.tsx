import React, { useEffect, useState, forwardRef } from "react";
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

const SignatureCanvasNoSSR = forwardRef<
  SignatureCanvasType,
  SignatureCanvasProps
>((props, ref) => {
  const [Component, setComponent] = useState<React.ForwardRefExoticComponent<
    React.PropsWithoutRef<SignatureCanvasProps> &
      React.RefAttributes<SignatureCanvasType>
  > | null>(null);

  useEffect(() => {
    import("react-signature-canvas").then((mod) => {
      const Wrapped = React.forwardRef<
        SignatureCanvasType,
        SignatureCanvasProps
      >((props, ref) => <mod.default {...props} ref={ref} />);
      Wrapped.displayName = "SignatureCanvasForwarded";
      setComponent(() => Wrapped);
    });
  }, []);

  if (!Component) return null;

  return <Component {...props} ref={ref} canvasProps={props.canvasProps} />;
});

SignatureCanvasNoSSR.displayName = "SignatureCanvasNoSSR";

export default SignatureCanvasNoSSR;
