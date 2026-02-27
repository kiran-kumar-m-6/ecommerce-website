import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SignUpProps } from "@/lib/type/SignUpType";

interface UserState {
  userDetails: SignUpProps[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  userDetails: [],
  loading: false,
  error: null,
};

const signUpSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<SignUpProps>) => {
      state.userDetails.push(action.payload);
    },

  },
});

export const { addUser } = signUpSlice.actions;
export default signUpSlice.reducer;