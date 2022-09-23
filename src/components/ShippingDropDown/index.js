import React from "react";
import TextField from "@mui/material/TextField";

export default function ShippingDropDown({
  label,
  handleChange,
  dropDownData,
  disabled,
  error,
}) {
  return (
    <div>
      <div>
        <TextField
          id="standard-select-currency-native"
          fullWidth={true}
          select
          disabled={disabled}
          label={label}
          error={error ? true : false}
          placeholder="Please select the country"
          SelectProps={{
            native: true,
          }}
          onChange={handleChange}
          helperText="Please select your country"
        >
          {dropDownData?.map((option, index) => (
            <option key={index} value={option.isoCode}>
              {option.name}
            </option>
          ))}
        </TextField>
      </div>
    </div>
  );
}
