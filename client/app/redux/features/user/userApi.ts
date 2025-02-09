import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: (avatar) => ({
        url: "update-user-avatar",
        method: "PUT",
        body: { avatar },
        credentials: "include" as const,
      }),
    }),
    editProfile: builder.mutation({
      query: ({ name }) => ({
        url: "update-user-info",
        method: "PUT",
        body: {
          name,
        },
        credentials: "include" as const,
      }),
    }),
    updatePassword: builder.mutation({
      query: ({ oldPassword, newPassword }) => ({
        url: "update-user-password",
        method: "PUT",
        body: {
          oldPassword,
          newPassword,
        },
        credentials: "include" as const,
      }),
    }),
    gatAllUsers: builder.query({
      query: () => ({
        url: "get-users",
        method: "GET",
        credentials: "include" as const,
      })
    }),
    UpdateUserRole: builder.mutation({
      query: ({role, email}) => ({
        url: "update-user",
        method: "PUT",
        body: {
          role,
          email,
        },
        credentials: "include" as const,
      })
    }),
    DeleteUser: builder.mutation({
      query: ({ id }) => ({
        url: "/delete-user/:id",
        method: "Delete",
        body: {
          id,
        },
        credentials: "include" as const,
      }),
    }),
  }),
});

export const {
  useUpdateAvatarMutation,
  useEditProfileMutation,
  useUpdatePasswordMutation,
  useGatAllUsersQuery,
  useUpdateUserRoleMutation,
  useDeleteUserMutation,
} = userApi;
