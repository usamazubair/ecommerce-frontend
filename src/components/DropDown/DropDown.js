import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDown({
  heading,
  dropDownData,
  handleChange,
  value,
  error,
}) {

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-select-small">{heading}</InputLabel>
      <Select
        autoWidth={true}
        classes={{ root: error && "dropDownError" }}
        labelId="demo-select-small"
        id="demo-select-small"
        value={value}
        label={heading}
        onChange={handleChange}
      >
        {dropDownData.map((data) => (
          <MenuItem key={data._id} value={data._id}>
            {data.Name}
          </MenuItem>
        ))}
      </Select>
      {error && <div className="errorMessage">{error}</div>}
    </FormControl>
  );
}
