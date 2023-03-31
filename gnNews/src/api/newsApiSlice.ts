import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const newsApiSlice = createApi({
  reducerPath: "news",

  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  tagTypes: ["News"],
  endpoints: (builder) => ({
    getNews: builder.query({
      query: (currenCountry) =>
        `https://newsapi.org/v2/top-headlines?country=${currenCountry}&apiKey=391818f85e7d4a2a88b7b2bed75fdca7
        }`,
      providesTags: [{ type: "News", id: "LIST" }],
    }),
  }),
});

export const { useGetNewsQuery } = newsApiSlice;
