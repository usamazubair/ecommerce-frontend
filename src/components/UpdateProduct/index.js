import React, { useState } from "react";
import Modal from "components/Modal/Modal";
import CustomInput from "components/CustomInput/CustomInput";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Loader from "components/Loader/Loader";
import AdminService from "services/AdminService";

export default function UpdateProduct({
  productData,
  updateProductModal,
  setUpdateProduct,
  updateProduct,
}) {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: productData.Name,
      quantity: productData.Quantity,
      price: productData.Price,
      color: productData.Color,
      brand: productData.Brand,
    },
    validateOnBlur: false,
    validationSchema: productValidationSchema(),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        await AdminService.updateProduct(
          productData._id,
          values
        );

        var productCopy = {
          _id: productData._id,
          Name: values.name,
          Quantity: values.quantity,
          Price: values.price,
          Color: values.color,
          Brand: values.brand,
        };

        updateProduct(productCopy);
      } catch (e) {}
      setLoading(false);
    },
  });

  return (
    <div className="addProductHeading">
      <Modal
        heading={"Update Product"}
        openModal={updateProductModal}
        setOpen={setUpdateProduct}
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
            id={"quantity"}
            label={"Quantity"}
            inputProps={formik.getFieldProps("quantity")}
            type={"number"}
            error={formik.errors.quantity}
          />
          <CustomInput
            id={"price"}
            label={"Price"}
            inputProps={formik.getFieldProps("price")}
            type={"number"}
            error={formik.errors.price}
          />
          <CustomInput
            id={"color"}
            label={"Color"}
            inputProps={formik.getFieldProps("color")}
            type={"text"}
            error={formik.errors.color}
          />
          <CustomInput
            id={"brand"}
            label={"Brand"}
            inputProps={formik.getFieldProps("brand")}
            type={"text"}
            error={formik.errors.brand}
          />
          <Button
            type="submit"
            disabled={loading ? true : false}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {!loading ? "Update Product" : <Loader />}
          </Button>
        </Box>
      </Modal>
    </div>
  );
}

const productValidationSchema = () => {
  return Yup.object().shape({
    name: Yup.string().required(),
    quantity: Yup.number().required(),
    price: Yup.number().required(),
    color: Yup.string().required(),
    brand: Yup.string().required(),
  });
};
