import { ReactNode } from "react";

type StackLayoutType = {
  children: ReactNode;
};
export default function StackLayout({ children }: StackLayoutType) {
  return <div className="w-full h-full bg-gray-200">{children}</div>;
}
