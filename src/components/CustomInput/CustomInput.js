import React from "react";
// import classNames from "classnames";
import TextField from "@mui/material/TextField";

export default function CustomInput({
  inputProps,
  error,
  label,
  id,
  type,
  autoComplete = "",
}) {

  return (
    <TextField
      type={type}
      error={error ? true : false}
      helperText={error && error}
      margin="normal"
      label={label}
      id={id}
      fullWidth
      inputProps={{
        ...inputProps,
      }}
      autoFocus
      autoComplete={autoComplete}
    />
  );
}
