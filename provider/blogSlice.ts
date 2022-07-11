import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TContents } from "../types/TypeBlog";

type blogData = {
  blog: TContents | undefined;
};

const initialState: blogData = {
  blog: undefined,
};

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    setBlog: (state, action) => {
      state.blog = action.payload;
    },
  },
});

export const { setBlog } = blogSlice.actions;
export default blogSlice.reducer;
