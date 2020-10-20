import React from "react";

import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
import VisuallyHidden from "@reach/visually-hidden";
import "@reach/dialog/styles.css";
import CardDetails from "./CardDetails";

function ShowCard() {
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <>
      <div
        className="bg-white mx-3 my-3 px-2 py-1 rounded shadow cursor-pointer hover:bg-gray-200"
        onClick={open}
      >
        <p className="text-gray-800">
          How can I get access to the super secret document?
        </p>
      </div>

      <Dialog isOpen={showDialog} onDismiss={close}>
        <button className="close-button" onClick={close}>
          <VisuallyHidden>Close</VisuallyHidden>
          <span aria-hidden>×</span>
        </button>
        <CardDetails />
      </Dialog>
    </>
  );
}

export default ShowCard;
