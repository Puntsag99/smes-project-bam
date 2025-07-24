declare module "react-signature-canvas" {
  import * as React from "react";

  export interface SignatureCanvasProps {
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
  }

  export default class SignatureCanvas extends React.Component<SignatureCanvasProps> {
    clear(): void;
    isEmpty(): boolean;
    getTrimmedCanvas(): HTMLCanvasElement;
    toDataURL(type?: string, encoderOptions?: number): string;
    fromDataURL(dataURL: string, options?: unknown): void;
    fromData(points: unknown): void;
    toData(): unknown;
  }
}
