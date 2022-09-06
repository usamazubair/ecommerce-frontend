import React, { useState } from "react";
import Modal from "components/Modal/Modal";
import CustomInput from "components/CustomInput/CustomInput";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Loader from "components/Loader/Loader";
import AdminService from "services/AdminService";

export default function AddProducts({ createCategory }) {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      country: "",
    },
    validateOnBlur: false,
    validationSchema: productValidationSchema(),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        var response = await AdminService.addCategory(values);
        createCategory(response.data.response);
      } catch (e) {}
      setLoading(false);
    },
  });

  const handleOpen = () => setOpen(true);

  return (
    <div className="addcategoryHeading">
      <div>
        <Button onClick={handleOpen}>Add Category</Button>
      </div>
      <Modal
        heading={"Add Category"}
        buttonName={"Add Category"}
        openModal={openModal}
        setOpen={setOpen}
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <CustomInput
            id={"name"}
            label={"Name"}
            inputProps={formik.getFieldProps("name")}
            type={"text"}
            error={formik.errors.name}
          />
          <CustomInput
            id={"country"}
            label={"Country"}
            inputProps={formik.getFieldProps("country")}
            type={"text"}
            error={formik.errors.country}
          />
          <Button
            type="submit"
            disabled={loading ? true : false}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {!loading ? "Add Category" : <Loader />}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

const productValidationSchema = () => {
  return Yup.object().shape({
    name: Yup.string().required(),
    country: Yup.string(),
  });
};
