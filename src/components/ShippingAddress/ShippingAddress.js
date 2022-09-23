import React, { useState, useEffect } from "react";
import CustomInput from "components/CustomInput/CustomInput";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Loader from "components/Loader/Loader";
import { Country, City } from "country-state-city";
import DropDown from "components/ShippingDropDown";
import PhoneInput from "react-phone-number-input/input";
import { isValidPhoneNumber } from "react-phone-number-input";
import classNames from "classnames";

export default function ShippingAddress({ setActiveStep, setShippingData }) {
  const [loading, setLoading] = useState(false);
  const [allCountries] = useState(Country.getAllCountries());
  const [countryCode, setCountryCode] = useState(allCountries[0].phonecode);
  const [allCities, setAllCities] = useState([]);
  const [phoneError, setPhoneError] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      fName: "",
      lName: "",
      company: "",
      address: "",
      zipcode: 0,
      country: "AF",
      city: "",
      pnumber: "",
    },
    validateOnBlur: false,
    validationSchema: shippingValidationSchema(),
    onSubmit: async (values) => {
      if (!isValidPhoneNumber(values.pnumber)) {
        setPhoneError(true);
        formik.setFieldError("pnumber", "You Phone Number is not valid");
        return;
      }

      setPhoneError(false);
      setActiveStep(1);
      try {
        setShippingData({ ...values });
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    },
  });

  useEffect(() => {
    var result = City.getCitiesOfCountry(formik.values.country);

    setAllCities(result);
    //eslint-disable-next-line
  }, []);

  const handleChange = (event) => {
    var result = Country.getCountryByCode(event.target.value);

    setCountryCode(result.phonecode);
    formik.setFieldValue("country", event.target.value);
    setAllCities(City.getCitiesOfCountry(event.target.value));
  };

  const handleCityChange = (event) => {
    formik.setFieldValue("city", event.target.value);
  };

  const handlePhoneChange = (event) => {
    if (event) {
      formik.setFieldValue("pnumber", event);
    }
  };

  return (
    <div className="shippingForm">
      <div>Shipping Address</div>
      <Box
        component="form"
        onSubmit={formik.handleSubmit}
        noValidate
        sx={{ mt: 1 }}
      >
        <CustomInput
          id={"email"}
          label={"Email Address"}
          inputProps={formik.getFieldProps("email")}
          type={"email"}
          error={formik.errors.email}
        />
        <CustomInput
          id={"fName"}
          label={"First Name"}
          inputProps={formik.getFieldProps("fName")}
          type={"text"}
          error={formik.errors.fName}
        />
        <CustomInput
          id={"lName"}
          label={"Last Name"}
          inputProps={formik.getFieldProps("lName")}
          type={"text"}
          error={formik.errors.lName}
        />
        <CustomInput
          id={"company"}
          label={"Company"}
          inputProps={formik.getFieldProps("company")}
          type={"text"}
          error={formik.errors.company}
        />
        <CustomInput
          id={"address"}
          label={"Address"}
          inputProps={formik.getFieldProps("address")}
          type={"text"}
          error={formik.errors.address}
        />
        <DropDown
          heading={"Country"}
          dropDownData={allCountries}
          handleChange={handleChange}
          value={formik.values.country}
          error={formik.errors.country}
        />
        <DropDown
          heading={"City"}
          dropDownData={allCities}
          disabled={allCities.length === 0 ? true : false}
          handleChange={handleCityChange}
          value={formik.values.city}
          error={formik.errors.city}
        />
        <CustomInput
          id={"zipcode"}
          label={"Zip Code"}
          inputProps={formik.getFieldProps("zipcode")}
          type={"number"}
          error={formik.errors.zipcode}
        />
        <label>Phone Number</label>

        <div className="phoneNumberRoot">
          <div
            className={classNames({
              content: true,
              phoneError: phoneError || formik.errors.pnumber ? true : false,
            })}
          >
            +{countryCode}
          </div>
          <PhoneInput
            className={classNames({
              phoneNumberInput: true,
              phoneError: phoneError || formik.errors.pnumber ? true : false,
            })}
            international
            country={formik.values.country}
            value={formik.values.pnumber}
            onChange={handlePhoneChange}
          />
        </div>
        {formik.errors.pnumber && (
          <span className="phoneErrorContext">{formik.errors.pnumber}</span>
        )}
        <Button
          type="submit"
          disabled={loading ? true : false}
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {!loading ? (
            "Next"
          ) : (
            <div className="progressButton">
              <Loader />
            </div>
          )}
        </Button>
      </Box>
    </div>
  );
}

const shippingValidationSchema = () => {
  return Yup.object().shape({
    email: Yup.string().email().required("Email address is required."),
    fName: Yup.string()
      .matches(
        /^[a-zA-Z\s]+$/,
        "First name cannot contain special characters and numbers "
      )
      .required("First name is required."),
    lName: Yup.string()
      .matches(
        /^[a-zA-Z\s]+$/,
        "Last name cannot contain special characters and numbers "
      )
      .required("Last name is required."),
    company: Yup.string(),
    address: Yup.string().required("Address is required."),
    city: Yup.string(),
    zipcode: Yup.number("Zip Code is required."),
    country: Yup.string().required("Country is required."),
    pnumber: Yup.string().required("Phone Number is required."),
  });
};
