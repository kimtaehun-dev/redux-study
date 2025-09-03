"use client";

import { useSelector } from "react-redux";
import { StackType } from "./stack";
import StackBox from "./StackBox";
import { AppDispatch, RootState } from "@/store/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { pop } from "@/store/stackSlice";

export function StackFrame() {
  const stackItems: StackType[] = useSelector(
    (state: RootState) => state.stack.items
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleStackPop = () => {
    dispatch(pop());
  };
  useEffect(() => {}, [stackItems]);
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      <div className="w-[80%] h-[80%] border-l-1 border-b-1 border-r-1 border-black flex gap-2 flex-col-reverse">
        {stackItems.map((item, index) => (
          <StackBox key={`stack-box-${index}`} stackItem={item} />
        ))}
      </div>
      <button
        className="w-[80%] border-black border-1 p-2 rounded-md hover:cursor-pointer"
        type="button"
        onClick={handleStackPop}
      >
        Pop
      </button>
    </div>
  );
}
