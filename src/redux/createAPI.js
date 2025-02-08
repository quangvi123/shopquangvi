import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import checkAndRefreshToken from "../middleware/checkAndRefreshToken";

const adminUrl = "/admin/";
const authUrl = "/auth/";
// const userUrl = "/user/";

// Cập nhật thêm endpoint getProductDetail vào trong createApi
export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/v1/api",
    prepareHeaders: async (headers) => {
      let token = localStorage.getItem("accessToken");

      // checkAndRefreshToken(headers, token);

      if (token) {
        headers.set("Authorization", `Bearer ${token}`); 
      }

      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Admin Endpoints
    getUsers: builder.query({
      query: () => `${adminUrl}users`,
    }),
    updateStatusUser: builder.mutation({
      query: ({ id, isActive }) => ({
        url:  `${adminUrl}users/${id}`,
        method: "PATCH",
        body: { isActive },
      })
    }),
    getCategoriesAdmin: builder.query({
      query: () => `${adminUrl}categories`
    }),
    newCategory: builder.mutation({
      query: (body) => ({
        url: `${adminUrl}categories`,
        method: 'POST',
        body,
      }),
    }),
    updateCategory: builder.mutation({
      query: ({id, body}) => ({
        url: `${adminUrl}categories/${id}`,
        method: "PATCH",
        body,
      })
    }),
    updateProduct: builder.mutation({
      query: ({ id, body }) => ({
        url: `${adminUrl}products/${id}`,
        method: "PATCH",
        body,
      })
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `${adminUrl}categories/${id}`,
        method: "DELETE"
      })
    }),

    getProductsAdmin: builder.query({
      query: () => `${adminUrl}products`
    }),
    createProduct: builder.mutation({
      query: (body) => ({
        url: `${adminUrl}products`,
        method: "POST",
        body,
      })
    }),

    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `${adminUrl}products/${id}`,
        method: "DELETE",
      })
    }),

    // NEW: Thêm endpoint để lấy chi tiết sản phẩm
    getProductDetail: builder.query({
      query: (id) => `${adminUrl}products/${id}`, // Dùng id lấy chi tiết sản phẩm
    }),

    // Todo Endpoints
    getTodo: builder.query({
      query: () => "admin/users",
    }),

    // Auth Endpoints
    login: builder.mutation({
      query: (body) => ({
        url: `${authUrl}login`,
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body) => ({
        url: `${authUrl}register`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useUpdateStatusUserMutation,

  useGetCategoriesAdminQuery,
  useNewCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
  useGetProductsAdminQuery,
  useCreateProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useGetProductDetailQuery,  // Hook mới được tạo ra cho endpoint chi tiết sản phẩm
  useGetTodoQuery,
  useLoginMutation,
  useRegisterMutation,
} = todoApi;
