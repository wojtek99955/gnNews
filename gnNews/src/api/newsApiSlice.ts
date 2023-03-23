import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApiSlice = createApi({
  reducerPath: "news",

  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  tagTypes: ["News"],
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () =>
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${
          import.meta.env.VITE_API_KEY
        }`,
      providesTags: [{ type: "News", id: "LIST" }],
    }),
  }),
});

export const { useGetNewsQuery } = newsApiSlice;
