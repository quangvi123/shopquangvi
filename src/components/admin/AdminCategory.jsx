import React, { useReducer } from "react";
import TitleCategory from "../admin/CategoryManager/TitleCategory";
import FormAddCategory from "../admin/CategoryManager/FormAddCategory";
import ListCategory from "../admin/CategoryManager/ListCategory";
import { useGetCategoriesAdminQuery } from "../../redux/createAPI";

export default function AdminCategory() {
  const { refetch } = useGetCategoriesAdminQuery();
  return (
    <>
        <div className="bg-gray-100 ">
          <TitleCategory />
          <div className="flex flex-col mx-3 mt-6 lg:flex-row">
            <FormAddCategory onAddSuccess={refetch} />
            <ListCategory />
          </div>
        </div>
    </>
  );
}