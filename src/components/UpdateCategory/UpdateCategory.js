import React, { useState } from "react";
import Modal from "components/Modal/Modal";
import CustomInput from "components/CustomInput/CustomInput";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Loader from "components/Loader/Loader";
import AdminService from "services/AdminService";

export default function UpdateCategory({
  categoryData,
  updateCategoryModal,
  setUpdateCategory,
  updateCategory,
}) {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: categoryData.Name,
      country: categoryData.Country,
    },
    validateOnBlur: false,
    validationSchema: categoryValidationSchema(),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await AdminService.updateCategory(categoryData._id, values);

        var categoryCopy = {
          _id: categoryData._id,
          Name: values.name,
          Country: values.country,
        };

        updateCategory(categoryCopy);
      } catch (e) {}
      setLoading(false);
    },
  });

  return (
    <div className="addcategoryHeading">
      <Modal
        heading={"Update Category"}
        openModal={updateCategoryModal}
        setOpen={setUpdateCategory}
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
            {!loading ? "Update Category" : <Loader />}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

const categoryValidationSchema = () => {
  return Yup.object().shape({
    name: Yup.string().required(),
    country: Yup.string(),
  });
};
