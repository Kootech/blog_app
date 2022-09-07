import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostApiRequest } from "../../services/api";

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  message: "",
};

export const fetchAllPost = createAsyncThunk(
  "post/getAll",
  async (_, ThunkAPI) => {
    try {
      //   console.log(await getPostApiRequest());
      return await getPostApiRequest();
    } catch (error) {
      return ThunkAPI.rejectWithValue(error);
    }
  }
);

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllPost.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchAllPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.posts = action.payload;
    });
  },
});

export default postSlice.reducer;
