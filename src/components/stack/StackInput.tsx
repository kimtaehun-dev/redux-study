"use client";

import { FormEvent, useState } from "react";

export function StackInput() {
  const [inputValue, setInputValue] = useState<string>("");
  const handleStackPush = (e: FormEvent) => {
    e.preventDefault();
    setInputValue("");
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
        </div>
      </form>
    </div>
  );
}
