"use client";

import { AppDispatch, RootState } from "@/store/store";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StackType } from "./stack";
import { clear, push } from "@/store/stackSlice";

export function StackInput() {
  const [inputValue, setInputValue] = useState<string>("");
  const stackItems: StackType[] = useSelector(
    (state: RootState) => state.stack.items
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleStackPush = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;
    const nextIndex = stackItems.length
      ? stackItems[stackItems.length - 1].index + 1
      : 0;
    dispatch(push({ index: nextIndex, value: inputValue }));
    setInputValue("");
  };

  const handleClear = () => {
    dispatch(clear());
  };

  return (
    <div className="flex flex-col w-[80%] gap-2">
      <form onSubmit={handleStackPush}>
        <label className="pl-3">스택 입력창</label>
        <div className="flex gap-4">
          <input
            className="border-black border-1 rounded-md w-[90%] h-10 pl-3"
            type="text"
            placeholder="입력"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="border-black border-1 p-2 rounded-md hover:cursor-pointer"
            type="submit"
          >
            Push
          </button>
          <button
            className="border-black border-1 p-2 rounded-md hover:cursor-pointer"
            type="button"
            onClick={handleClear}
          >
            clear
          </button>
        </div>
      </form>
    </div>
  );
}
