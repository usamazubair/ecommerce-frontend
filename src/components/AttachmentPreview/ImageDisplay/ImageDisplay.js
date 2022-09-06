import React from "react";

const useStyle = {
  attachmentImage: {
    height: "100%",
    width: "100%",
    maxHeight: "inherit",
    maxWidth: "inherit",
    minHeight: "inherit",
    minWidth: "inherit",
    objectFit: "cover",
  },
};

export default function ImageDisplay({ attachmentSrc }) {
  const classes = useStyle;

  return (
    <img
      style={classes.attachmentImage}
      src={attachmentSrc}
      alt="attachment preview"
    />
  );
}
