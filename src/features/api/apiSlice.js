import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allApi = createApi({
  reducerPath: "allApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ['FriendRequest'],
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
        providesTags: ['FriendRequest']
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
    sentFriendRequest: builder.mutation({
      query: (data) => ({
        url: "/addFriend",
        method: "POST",
        body: data,
      }),
    }),
    friendRequestDelete: builder.mutation({
      query: (data) => ({
        url: `/reqDelete/${data[0]._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['FriendRequest']
    }),

  }),
});

export const {
  useStoreUserInfoMutation,
  useGetSingleUserInfoQuery,
  useGetAllChitChatUsersQuery,
  useGetAllIndividualUserPostsQuery,
  useGetSingleUserFriendReqQuery,
  useFriendRequestDeleteMutation,
  useSentFriendRequestMutation
} = allApi;
