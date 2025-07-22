import * as React from "react";

declare module "reactjs-popup" {
  interface PopupProps {
    trigger?: React.ReactNode;
    modal?: boolean;
    closeOnDocumentClick?: boolean;
    children?: React.ReactNode | ((close: () => void) => React.ReactNode);
  }

  export default class Popup extends React.Component<PopupProps> {}
}
