import React, { useState } from 'react';
import axios from 'axios';

export default function AdminProduct({ onAddSuccess }) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image1: '',
    description: '',
    type: 'sneakers',
    categoryId: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  // Hàm xử lý khi người dùng submit form
  const handleAdd = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Gửi yêu cầu POST đến backend để thêm sản phẩm
      const response = await axios.post('http://localhost:3000/api/products/add', newProduct);

      if (response.status === 201) {
        onAddSuccess(); // Gọi hàm khi thêm thành công
        setNewProduct({}); // Reset form
        alert('Sản phẩm đã được thêm thành công!');
      }
    } catch (error) {
      console.error('Failed to add product: ', error);
      alert('Đã xảy ra lỗi khi thêm sản phẩm!');
    }

    setIsLoading(false);
  };

  // Hàm thay đổi giá trị trong form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div className="w-full lg:w-1/3 m-1">
      <form onSubmit={handleAdd} className="w-full bg-white shadow-md p-6">
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* Tên sản phẩm */}
          <div className="w-full md:w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Product Name
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              placeholder="Product Name"
              required
            />
          </div>

          {/* Giá sản phẩm */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Price
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              placeholder="Price"
              required
            />
          </div>

          {/* Ảnh sản phẩm */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="image1">
              Product Image URL
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
              type="text"
              name="image1"
              value={newProduct.image1}
              onChange={handleChange}
              placeholder="Image URL"
              required
            />
          </div>

          {/* Mô tả sản phẩm */}
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Product Description
            </label>
            <textarea
              rows={4}
              className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
              name="description"
              value={newProduct.description}
              onChange={handleChange}
              placeholder="Product Description"
            />
          </div>

          {/* Loại sản phẩm */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="type">
              Product Type
            </label>
            <select
              className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
              name="type"
              value={newProduct.type}
              onChange={handleChange}
            >
              <option value="sneakers">Sneakers</option>
              <option value="formal">Formal</option>
              <option value="sports">Sports</option>
              <option value="casual">Casual</option>
              <option value="boots">Boots</option>
              <option value="slippers">Slippers</option>
            </select>
          </div>

          {/* Danh mục sản phẩm */}
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2" htmlFor="categoryId">
              Category ID
            </label>
            <input
              className="appearance-none block w-full bg-white text-gray-900 font-medium border border-gray-400 rounded-lg py-3 px-3 leading-tight focus:outline-none focus:border-[#98c01d]"
              type="number"
              name="categoryId"
              value={newProduct.categoryId}
              onChange={handleChange}
              placeholder="Category ID"
              required
            />
          </div>

          {/* Nút Submit */}
          <div className="w-full px-3 mb-6">
            <button
              type="submit"
              className="appearance-none block w-full bg-green-700 text-gray-100 font-bold border border-gray-200 rounded-lg py-3 px-3 leading-tight hover:bg-green-600 focus:outline-none focus:bg-white focus:border-gray-500"
              disabled={isLoading}
            >
              {isLoading ? 'Adding...' : 'Add Product'}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
