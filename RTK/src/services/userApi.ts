import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface User {
  id: number;
  name: string;
  email: string;
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://63fed78dc5c800a7238698ea.mockapi.io/api/v1/' }),
  refetchOnFocus: true, // refetch data on each focus. Optional, might cause performance issues
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => 'users',
    }),
    createUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: 'users',
        method: 'POST',
        body: user,
      }),
    }),
    editUser: builder.mutation<User, Partial<User>>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: 'PUT',
        body: user,
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// export auto geneated hooks
export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useEditUserMutation,
  useDeleteUserMutation,
} = userApi;
