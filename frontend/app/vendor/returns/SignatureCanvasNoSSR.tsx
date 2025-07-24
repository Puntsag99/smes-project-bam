import React, { useEffect, useState } from "react";
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
  canvasProps?: React.CanvasHTMLAttributes<HTMLCanvasElement> & {
    ref?: React.Ref<SignatureCanvasType>;
  };
};

const SignatureCanvasNoSSR: React.FC<SignatureCanvasProps> = (props) => {
  const [Component, setComponent] =
    useState<React.ComponentType<SignatureCanvasProps> | null>(null);

  useEffect(() => {
    import("react-signature-canvas").then((mod) => {
      // Dynamic импорт хийсэн модуль дээр forwardRef ашиглан React компонент үүсгэнэ
      const Wrapped = React.forwardRef<
        SignatureCanvasType,
        SignatureCanvasProps
      >((props, ref) => <mod.default {...props} ref={ref} />);
      Wrapped.displayName = "SignatureCanvasForwarded";

      setComponent(() => Wrapped);
    });
  }, []);

  if (!Component) return null;

  return <Component {...props} canvasProps={{ ...props.canvasProps }} />;
};

export default SignatureCanvasNoSSR;
