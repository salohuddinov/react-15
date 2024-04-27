import { api } from './api'

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getCategory: build.query({
      query: () => ({ 
        url: '/category' 
      }),
      providesTags:["Category"]
    }),
  }),
})

export const {
  useGetCategoryQuery
} = categoryApi