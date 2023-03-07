import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const allApi = createApi({
  reducerPath: "allApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ['DeleteFriendReq','AcceptFriendReq'],
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
        providesTags: ['DeleteFriendReq','AcceptFriendReq']
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
    getAllLikes: builder.query({
      query: (data) => ({
        url:  `getAllLikes/${data.email}`,
      }),
    }),
    getSearchUsers: builder.query({
      query: (data) => ({
        url:  `getSearchUsers/${data.name}`,
      }),
    }),
    getAllFriendsPosts: builder.query({
      query: (data) => ({
        url:  `/getAllFriendsPosts/${data.email}`,
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
    insertLike: builder.mutation({
      query: (data) => ({
        url: "/like",
        method: "POST",
        body: data,
      }),
    }),
    friendRequestAccept: builder.mutation({
      query: (data) => ({
        url: "/reqAccepted",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ['AcceptFriendReq']
    }),
    friendRequestDelete: builder.mutation({
      query: (data) => ({
        url: `/reqDelete/${data._id}`,
        method: "DELETE",
      }),
      invalidatesTags: ['DeleteFriendReq']
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
  useSentFriendRequestMutation,
  useFriendRequestAcceptMutation,
  useGetAllFriendsPostsQuery,
  useInsertLikeMutation,
  useGetAllLikesQuery,
  useGetSearchUsersQuery
} = allApi;
