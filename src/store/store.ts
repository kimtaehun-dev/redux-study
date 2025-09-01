// configureStore : RTK의 스토어 생성기=>DevTools/Thunk/미들웨어 기본세팅을 알아서 해줌(?)
import { configureStore } from "@reduxjs/toolkit";
import stackReducer from "./stackSlice";

export const store = configureStore({
  //reducer에 객체를 주면 내부적으로 combineReducers가 됨 => 최종state 모양 {stack : {items:[...]}}
  //들어온 모든 액션을 stackReducer(state.stack, action)에 전달해서 부분
  reducer: {
    stack: stackReducer,
  },
  //middleware/devTools/preloadedState는 필요할 때만 옵션추가
});

// 스토어에서 실제로 관리하는 상태구조를 타입화 해주는 부분
export type RootState = ReturnType<typeof store.getState>;

// dispatch에 들어갈 액션의 타입.
export type AppDispatch = typeof store.dispatch;
