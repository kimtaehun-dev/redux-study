import { StackType } from "@/components/stack/stack";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//상태 타입 지정
type StackStateType = {
  items: StackType[];
};

//전역 상태 초기값
const initialState: StackStateType = {
  items: [],
};

/** stack이라는 네임스페이스로 관리할 전역 함수의 action과 초기값을 등록
 *  action 객체에는 이런식의 데이터들이 들어감
 *  {
      push: ƒ(payload) { return { type: "stack/push", payload } },
      pop: ƒ() { return { type: "stack/pop" } },
      clear: ƒ() { return { type: "stack/clear" } }
    }
  * 그래서 action.payload를 호출시 dispatch를 통해 전달된 값이 받아짐
  * ex) dispatch(push({ index: 0, value: "첫 번째" }))
 */
const stackSlice = createSlice({
  name: "stack",
  initialState,
  reducers: {
    push: (state, action: PayloadAction<StackType>) => {
      state.items.push(action.payload);
    },
    pop: (state) => {
      state.items.pop();
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { push, pop, clear } = stackSlice.actions;
export default stackSlice.reducer;
