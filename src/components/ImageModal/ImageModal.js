import React from "react";
import ImageDisplay from "components/AttachmentPreview/ImageDisplay/ImageDisplay";
import { ReactComponent as CloseIcon } from "assets/images/icons/cancel.svg";
import ReactDOM from "react-dom";

const styles = {
  previewDialog: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "111111",
    color: "black",
  },
  previewDialogBackdrop: {
    height: "inherit",
    width: "inherit",
    position: "fixed",
    backgroundColor: "black",
    top: "0",
    left: "0",
    zIndex: "-1",
    pointerEvents: "none",
    opacity: "0.7",
  },
  closeIcon: {
    width: "25px",
    cursor: "pointer",
    fill: "white",
  },

  closeContainer: {
    padding: "20px",
    position: "absolute",
    top: 0,
    right: 0,
  },
};

export default function ImageModal({
  closePreviewDailog,
  attachmentSrc,
  attachment,
}) {
  const classes = styles;

  const preventDefaultOnClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  const DisplayImageModal = () => {
    return (
      <div style={classes.previewDialog} onClick={closePreviewDailog}>
        <div style={classes.previewDialogBackdrop}></div>
        <div style={classes.closeContainer}>
          <CloseIcon style={classes.closeIcon} onClick={closePreviewDailog} />
        </div>
        <div
          className={"imagePreviewContentContainer"}
          onClick={preventDefaultOnClick}
        >
          <ImageDisplay attachmentSrc={attachmentSrc} type={attachment.type} />
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <DisplayImageModal />,
        document.getElementById("backdrop-root")
      )}
      ;
    </React.Fragment>
  );
}
