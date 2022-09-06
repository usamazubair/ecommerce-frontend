import React, { useState } from "react";
import Modal from "components/Modal/Modal";
import CustomInput from "components/CustomInput/CustomInput";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import Box from "@mui/material/Box";
import Loader from "components/Loader/Loader";
import AdminService from "services/AdminService";
import DropDown from "components/DropDown/DropDown";
import AttachmentPreview from "components/AttachmentPreview/AttachmentPreview";
import AttachmentSelection from "components/AttachmentSelection/AttachmentSelection";
import GeneralService from "services/GeneralService";

export default function AddProducts({ createProduct, allCategories }) {
  const [loading, setLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [openModal, setOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      quantity: "",
      price: "",
      color: "",
      brand: "",
      category: "",
      attachment: null,
    },
    validateOnBlur: false,
    validationSchema: productValidationSchema(),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        var generalResponse = await GeneralService.uploadImage(
          "uploadImage",
          values.attachment,
          (progress) => {
            setUploadProgress(`${Math.floor(progress)}%`);
          }
        );

        var { filePath } = generalResponse.data;
        var response = await AdminService.addProduct(values, filePath);
        createProduct(response.data.response);
        formik.resetForm();
      } catch (e) {}
      setLoading(false);
    },
  });

  const handleOpen = () => setOpen(true);

  const handleChange = (event) => {
    formik.setFieldValue("category", event.target.value);
  };

  const onAttachmentSelected = (file) => {
    formik.setFieldValue("attachment", file);
  };

  const clearAttachment = () => {
    formik.setFieldValue("attachment", null);
  };

  return (
    <div className="addProductHeading">
      <div>
        <Button onClick={handleOpen}>Add Product</Button>
      </div>
      <Modal
        heading={"Add Product"}
        buttonName={"Add Product"}
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
          <div className="productFooterSection">
            <DropDown
              heading={"Category"}
              dropDownData={allCategories}
              handleChange={handleChange}
              value={formik.values.category}
              error={formik.errors.category}
            />
            <AttachmentSelection
              type="image"
              showSelectors={false}
              onChange={onAttachmentSelected}
              accepted={[".png", ".jpg", ".jpeg"]}
            />
            {!!formik.values.attachment && (
              <AttachmentPreview
                attachment={formik.values.attachment}
                clearAttachment={clearAttachment}
              />
            )}
          </div>
          <Button
            type="submit"
            disabled={loading ? true : false}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {!loading ? (
              "Add Product"
            ) : (
              <div className="progressButton">
                {uploadProgress} <Loader />
              </div>
            )}
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
    category: Yup.mixed().required(),
    attachment: Yup.mixed().required(),
  });
};
