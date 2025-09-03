"use client";

import { AppDispatch, RootState } from "@/store/store";
import { FormEvent, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StackType } from "./stack";
import { clear, push } from "@/store/stackSlice";
import { FirstInput, setFirstInput } from "@/store/firstInputSlice";

export function StackInput() {
  const isFirstInput = useRef(false);

  const [inputValue, setInputValue] = useState<string>("");
  const stackItems: StackType[] = useSelector(
    (state: RootState) => state.stack.items
  );
  const firstInput: FirstInput = useSelector(
    (state: RootState) => state.firstInput
  );
  const dispatch = useDispatch<AppDispatch>();

  const handleStackPush = (e: FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;
    if (!isFirstInput.current) {
      dispatch(setFirstInput(inputValue));
      isFirstInput.current = true;
    }
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
      <span className="text-center">{firstInput}</span>
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
