import React, { useRef, useEffect, useState } from "react";
import { ReactComponent as AttachmentIcon } from "assets/images/icons/attachment-icon.svg";
import "assets/scss/partials/attachment.scss";

export default function AttachmentSelection({
  onChange = () => {},
  attachmentIconColor = "#A1A2A9",
  AttachIcon = AttachmentIcon,
  attachmentClass = "mw-20 ms-2 me-3",
  attachmentTextClass = null,
  attachmentIconStyle = {
    cursor: "pointer",
    fill: attachmentIconColor,
  },
  labelAttachment,
  classAttatchment,
  accepted = null,
}) {
  const attachmentInputRef = useRef(null);
  const [acceptedMimeTypes, setAcceptedMimeTypes] = useState([
    ".png",
    ".jpg",
    ".jpeg",
    ".mp4",
    ".mp3",
    ".webm",
  ]);
  const [randomNumber] = useState(Math.round(Math.random() * 1000).toFixed());

  const onAttachmentSelected = (event) => {
    const file = event.nativeEvent.target.files[0];

    attachmentInputRef.current.value = null;

    if (!file) {
      return;
    }

    onChange(file);
  };

  useEffect(() => {
    if (!accepted) {
      return;
    }

    setAcceptedMimeTypes(accepted);
  }, [accepted]);

  return (
    <>
      <span className={classAttatchment}>
        <label
          className={labelAttachment}
          htmlFor={`attachment-${randomNumber}`}
          style={{ color: "inherit" }}
        >
          <input
            className="attachmentFile"
            id={`attachment-${randomNumber}`}
            type="file"
            ref={attachmentInputRef}
            accept={acceptedMimeTypes.join(",")}
            onChange={onAttachmentSelected}
          />
          <span className={attachmentTextClass}>
            <AttachIcon
              className={attachmentClass}
              style={attachmentIconStyle}
            />
          </span>
        </label>
      </span>
    </>
  );
}
