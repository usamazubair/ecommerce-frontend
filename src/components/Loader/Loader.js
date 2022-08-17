import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Loader() {
  return (
    <div style={{ display: "flex" }}>
      <CircularProgress />
    </div>
  );
}
