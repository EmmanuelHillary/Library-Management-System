import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://librarymanagementsys-20df705de90f.herokuapp.com/lib/v1/";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
      prepareHeaders: (headers, { getState }) => {
        const token = (getState()).auth.token;
        if (token) {
          headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
      },
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery,
    endpoints: (builder) => ({}),
});