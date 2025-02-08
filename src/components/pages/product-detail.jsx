import React, { Component } from 'react'

export default function ProductDetail (){

    return (
      <>
     <div className="bg-gray-100">
  <div className="container mx-auto px-4 py-8">
    <div className="flex flex-wrap -mx-4">
      {/* Hình ảnh sản phẩm */}
      <div className="w-full md:w-1/2 px-4 mb-8">
        <img
          src="https://cigadesign.com/cdn/shop/files/20230314114951.jpg?v=1685622142"
          alt="Sản phẩm"
          className="w-full h-auto rounded-lg shadow-md mb-4"
          id="mainImage"
        />
        <div className="flex gap-4 py-4 justify-center overflow-x-auto">
          <img
            src="https://cigadesign.com/cdn/shop/files/20230314115022.jpg?v=1685622137"
            alt="Hình thu nhỏ 1"
            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
            onclick="changeImage(this.src)"
          />
          <img
            src="https://cigadesign.com/cdn/shop/files/20230314115007.jpg?v=1685622137"
            alt="Hình thu nhỏ 2"
            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
            onclick="changeImage(this.src)"
          />
          <img
            src="https://cigadesign.com/cdn/shop/files/20230314115019.jpg?v=1699951405"
            alt="Hình thu nhỏ 3"
            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
            onclick="changeImage(this.src)"
          />
          <img
            src="https://cigadesign.com/cdn/shop/products/ad216c653fe282092b89968bc303566f.jpg?v=1685622142"
            alt="Hình thu nhỏ 4"
            className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
            onclick="changeImage(this.src)"
          />
        </div>
      </div>
      {/* Chi tiết sản phẩm */}
      <div className="w-full md:w-1/2 px-4">
        <h2 className="text-3xl font-bold mb-2">Đồng hồ nữ thời trang</h2>
        <p className="text-gray-600 mb-4">Mã sản phẩm: WH1000XM4</p>
        <div className="mb-4">
          <span className="text-2xl font-bold mr-2">8.199.000₫</span>
          <span className="text-gray-500 line-through">9.399.000₫</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="ml-2 text-gray-600">4.5 (120 đánh giá)</span>
        </div>
        <p className="text-gray-700 mb-6">
          Trải nghiệm chất lượng âm thanh cao cấp và công nghệ chống ồn hàng đầu với tai nghe không dây này. Lý tưởng cho người yêu nhạc và những người thường xuyên di chuyển.
        </p>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Màu sắc:</h3>
          <div className="flex space-x-2">
            <button className="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black" />
            <button className="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300" />
            <button className="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="quantity"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Số lượng:
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min={1}
            defaultValue={1}
            className="w-12 text-center rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="flex space-x-4 mb-6">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
            Thêm vào giỏ hàng
          </button>
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300">
            Thêm vào yêu thích
          </button>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Tính năng nổi bật:</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Khử tiếng ồn hàng đầu</li>
            <li>Thời lượng pin 30 giờ</li>
            <li>Điều khiển cảm ứng</li>
            <li>Công nghệ trò chuyện thông minh</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>


      </>
    )
}

