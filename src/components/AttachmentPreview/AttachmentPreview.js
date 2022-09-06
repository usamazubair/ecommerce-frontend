import React, { useState, useEffect } from "react";
import ImagePreview from "./ImagePreview/ImagePreview";
import ImageModal from "components/ImageModal/ImageModal";
import { ReactComponent as DeleteIcon } from "assets/images/icons/Delete.svg";

export default function AttachmentPreview({
  removePreviewAttachment,
  imageStyle,
  attachment,
  clearAttachment,
  showPreview = false,
}) {
  const [attachmentSrc, setAttachmentSrc] = useState(null);
  const [showPreviewDialog, setShowPreviewDialog] = useState(false);

  const type = ((type) => {
    if (type.includes("image")) {
      return "image";
    }

    return "";
  })(attachment.type);

  useEffect(() => {
    if (!showPreview) {
      return;
    }

    setShowPreviewDialog(showPreview);
  }, [showPreview]);

  useEffect(() => {
    setAttachmentSrc(URL.createObjectURL(attachment));
  }, [attachment]);

  const showPreviewDailog = () => {
    // document.getElementById("right-sidebar").style.zIndex = "-1";
    // document.getElementById("header").style.zIndex = "-1";
    setShowPreviewDialog(true);
  };

  const closePreviewDailog = () => {
    // document.getElementById("right-sidebar").style.zIndex = "1";
    // document.getElementById("header").style.zIndex = "1";
    setShowPreviewDialog(false);
  };

  return (
    <>
      <div onClick={showPreviewDailog} className="attachmentPreview">
        {type === "image" && (
          <ImagePreview
            attachmentSrc={attachmentSrc}
            attachmentStyle={imageStyle}
          />
        )}
        <DeleteIcon onClick={clearAttachment} className="deleteIcon" />
      </div>
      {showPreviewDialog && (
        <ImageModal
          attachmentSrc={attachmentSrc}
          attachment={attachment}
          closePreviewDailog={closePreviewDailog}
        />
      )}
    </>
  );
}
