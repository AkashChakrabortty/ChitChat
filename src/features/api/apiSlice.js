import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allApi = createApi({
  reducerPath: "allApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  endpoints: (builder) => ({
    getSingleUserInfo: builder.query({
      query: (data) => ({
        url: `getSingleUserInfo/${data.email}`,
      }),
    }),
    getSingleUserFriendReq: builder.query({
        query: (data) => ({
          url: `request/${data.email}`,
        }),
      }),
    getAllChitChatUsers: builder.query({
      query: (data) => ({
        url: `/getAllChitChatUsers`,
      }),
    }),
    getAllIndividualUserPosts: builder.query({
      query: (data) => ({
        url:  `getAllIndividualUserPosts/${data.email}`,
      }),
    }),
    storeUserInfo: builder.mutation({
      query: (data) => ({
        url: "/storeUserInfo",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useStoreUserInfoMutation,
  useGetSingleUserInfoQuery,
  useGetAllChitChatUsersQuery,
  useGetAllIndividualUserPostsQuery,
  useGetSingleUserFriendReqQuery
} = allApi;
