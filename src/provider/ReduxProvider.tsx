"use client";
import { store } from "@/store/store";
import { ReactNode } from "react";
import { Provider } from "react-redux";

type ReduxProviderType = {
  children: ReactNode;
};
export default function ReduxProvider({ children }: ReduxProviderType) {
  return <Provider store={store}>{children}</Provider>;
}
