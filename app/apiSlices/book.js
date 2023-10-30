import { apiSlice } from "../api";

export const bookSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
          createBooks: builder.mutation({
            query: (body) => ({
                url: "books/creatbook/",
                  method: "POST",
                  body,
                
            }),
          }),
        
          updateBooks: builder.mutation({
            query: ({ id, body }) => ({
                url: `books/updatebook/${id}`,
                  method: "PUT",
                  body,
            }),
          }),
          
          gettotalBookvalue: builder.query({
            query: () => ({
                url: "books/gettotalbookvalue/books",
                method: "GET",
            }),
          }),

          gettotalBorrowedbookvalue: builder.query({
            query: () => ({
                url: "books/gettotalborrowedbookvalue/books",
                method: "GET",
            }),
          }),

           getallBooks: builder.query({
            query: () => ({
                url: "books/getallbooks/",
                method: "GET",
            }),
           }),
           
            getBook: builder.query({
            query: (id) => ({
                url: `books/getbook/${id}`,
                method: "GET",
            }),
            }),
            
            searchBooks: builder.query({
            query: (id) => ({
                url: `books/search`,
                method: "GET",
                body:body,
            }),
            }),
            
            borrowBooks: builder.mutation({
            query: (id) => ({
                url: `books/borrowbooks/${id}`,
                  method: "POST",
            }),
            }),
            
            userBooksInDept: builder.query({
            query: () => ({
                url: 'books/userbooks-in-department/',
                method: "GET",
            }),
            }),

            borrowedBooks: builder.query({
            query: () => ({
                url: 'books/borrowed-books/',
                method: "GET",
            }),
            }),

             returnBooks: builder.mutation({
            query: (id) => ({
                url: `books/returnbooks/${id}`,
                  method: "PUT",
            }),
             }),
             
            getBorrowedBooks: builder.query({
            query: () => ({
                url: 'books/getborrowedbooks/',
                method: "GET",
            }),
            }),

            getOverdueBooks: builder.query({
            query: () => ({
                url: 'books/getoverduebooks/',
                method: "GET",
            }),
            }),

            getQueuedUsers: builder.query({
            query: () => ({
                url: 'books/getqueuedusers',
                method: "GET",
            }),
            }),

            getBorrowedBooks: builder.query({
            query: (id) => ({
                url: `books/getborrowedbooks/${id}`,
                  method: "GET",
            }),
             }),

          
    })
});

export const {
    useBorrowBooksMutation,
    useBorrowedBooksQuery,
    useCreateBooksMutation,
    useGetBookQuery,
    useGetBorrowedBooksQuery,
    useGetOverdueBooksQuery,
    useGetQueuedUsersQuery,
    useGetallBooksQuery,
    useGettotalBookvalueQuery,
    useGettotalBorrowedbookvalueQuery,
    useSearchBooksQuery,
    useUpdateBooksMutation,
    
    
} = bookSlice;