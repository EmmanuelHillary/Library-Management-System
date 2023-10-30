import { apiSlice } from "../api";

export const authSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (credentials) => ({
                url: "auth/login/",
                method: "POST",
                body: credentials,
            }),
        }),

        loginAdmin: builder.mutation({
            query: (credentials) => ({
                url: "auth/admin/login/",
                method: "POST",
                body: credentials,
            }),
        }),

        usersSignUp: builder.mutation({
            query: (credentials) => ({
                url: "users/usersignup",
                method: "POST",
                body: credentials,
            }),
        }),
    }),
});

export const {
    useLoginUserMutation,
    useLoginAdminMutation,
    useUsersSignUpMutation,
} = authSlice;