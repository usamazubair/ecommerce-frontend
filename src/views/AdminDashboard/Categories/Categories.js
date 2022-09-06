import React from "react";
import AllCategories from "components/AllCategories/AllCategories";
import "assets/scss/component/category.scss";
import AdminService from "services/AdminService";
import AddCategory from "components/AddCategory/AddCategory";
import { useAdminContext } from "store/contexts/adminContext";

export default function Categories() {
  const { allCategories, setCategories } = useAdminContext();

  const createCategory = (Category) => {
    setCategories([...allCategories, Category]);
  };

  const deleteCategory = async (id) => {
    try {
      await AdminService.deleteCategory(id);
    } catch (e) {
      console.log(e);
    }
    setCategories(allCategories.filter((category) => category._id !== id));
  };

  const updateCategory = async (category) => {
    const categoryCopy = [...allCategories];

    categoryCopy[
      categoryCopy.findIndex((tCategory) => {
        return tCategory._id === category?._id;
      })
    ] = {
      ...category,
    };

    setCategories(categoryCopy);
  };

  return (
    <div className="categoryRoot">
      <div className="categoryContent">
        <h5>Categories</h5>
        <AddCategory createCategory={createCategory} />
        <AllCategories
          allCategories={allCategories}
          updateCategory={updateCategory}
          deleteCategory={deleteCategory}
        />
      </div>
    </div>
  );
}
