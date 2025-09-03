import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FirstInput = string;

const initialState: FirstInput = "아직 입력된 값이 없습니다.";

const firstInputSlice = createSlice({
  name: "firstInput",
  initialState,
  reducers: {
    setFirstInput: (_state, action: PayloadAction<FirstInput>) => {
      return action.payload;
    },
  },
});

export const { setFirstInput } = firstInputSlice.actions;
export default firstInputSlice.reducer;
