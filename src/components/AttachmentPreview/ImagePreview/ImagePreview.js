import React from "react";

const useStyle = {
  attachmentImage: {
    maxHeight: "inherit",
    maxWidth: "inherit",
    minHeight: "inherit",
    minWidth: "inherit",
    objectFit: "cover",
  },
  iconImage: {
    position: "absolute",
    top: 0,
    width: "100%",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function ImagePreview({
  attachmentSrc,
  attachmentStyle = useStyle.attachmentImage,
  Icon = false,
}) {
  return (
    <>
      <img style={attachmentStyle} src={attachmentSrc} alt="post-attachment" />
      {Icon && <div style={useStyle.iconImage}>{Icon}</div>}
    </>
  );
}
