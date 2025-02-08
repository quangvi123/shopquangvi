import React, { useState } from 'react';
import { 
  useDeleteCategoryMutation, 
  useGetCategoriesAdminQuery, 
  useUpdateCategoryMutation 
} from "../../../redux/createAPI";
import ItemCategory from "./ItemCategory";
import EditCategory from "./EditCategory";
import { IoMdClose } from "react-icons/io";

export default function ListCategory() {
  const { data, refetch } = useGetCategoriesAdminQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  const [updateCategory] = useUpdateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const [isEditing, setIsEditing] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(null);

  const categories = data?.data || []; 

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this category?");
    if (confirmDelete) {
      await deleteCategory(id);
      refetch(); 
    }
  };

  const list = categories.map((item) => (
    <ItemCategory 
      key={item.id} 
      {...item} 
      onEdit={() => {
        setCurrentCategory(item); 
        setIsEditing(true); 
      }}
      onDelete={() => handleDelete(item.id)} 
    />
  ));

  const handleSubmit = async (values) => {
    await updateCategory({ id: values.id, body: values }); 
    refetch(); 
    setIsEditing(false); 
  };

  const closeForm = () => {
    setIsEditing(false);
  };

  return (
    <div className="w-full lg:w-2/3 m-1 bg-white shadow-lg text-lg rounded-sm border border-gray-200">
      <div className="overflow-x-auto rounded-lg p-3">
        <table className="table-auto w-full">
          <thead className="text-sm font-semibold uppercase text-gray-800 bg-gray-50 mx-auto">
            <tr>
              <th>STT</th>
              <th className="p-2">
                <div className="font-semibold">Category</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Description</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Action</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm font-semibold uppercase text-gray-800 mx-auto">
            {list}
          </tbody>
        </table>
        {isEditing && (
          <div className="center-position relative">
            <EditCategory 
              initialData={currentCategory} 
              onSubmit={handleSubmit}
            />
            <div className="absolute top-0 right-0">
              <IoMdClose onClick={closeForm} className="box-icon-large" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}