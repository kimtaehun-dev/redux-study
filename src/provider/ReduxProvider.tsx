"use client";
import { store } from "@/store/store";
import { ReactNode, useMemo } from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

type ReduxProviderType = {
  children: ReactNode;
};

export default function ReduxProvider({ children }: ReduxProviderType) {
  const persistor = useMemo(() => persistStore(store), []);
  return (
    <Provider store={store}>
      {/* 로컬스토리지 저장을 위한 랩퍼 */}
      <PersistGate loading={<div>로딩중...</div>} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}
