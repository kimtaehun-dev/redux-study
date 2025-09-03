// configureStore : RTK의 스토어 생성기=>DevTools/Thunk/미들웨어 기본세팅을 알아서 해줌(?)
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import stackReducer from "./stackSlice";
import firstInputReducer from "./firstInputSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

// persist 설정
const persistConfig = {
  key: "stack", // localStorage key
  storage, // 기본 localStorage
  whitelist: ["stack"], // 저장하고 싶은 slice reducer 이름
  blacklist: ["firstInput"], // 저장하고 싶지 않은 slice reducer 이름
};

// rootReducer 정의
const rootReducer = combineReducers({
  stack: stackReducer,
  firstInput: firstInputReducer,
});

// persistReducer로 rootReducer 감싸기
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  //reducer에 객체를 주면 내부적으로 combineReducers가 됨 => 최종state 모양 {stack : {items:[...]}}
  //들어온 모든 액션을 stackReducer(state.stack, action)에 전달해서 부분
  reducer: persistedReducer,
  //middleware/devTools/preloadedState는 필요할 때만 옵션추가
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// 스토어에서 실제로 관리하는 상태구조를 타입화 해주는 부분
export type RootState = ReturnType<typeof store.getState>;

// dispatch에 들어갈 액션의 타입.
export type AppDispatch = typeof store.dispatch;
