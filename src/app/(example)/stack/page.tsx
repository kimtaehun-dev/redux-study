import { StackFrame, StackInput } from "@/components/stack";

export default function StackPage() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-[80%] h-[80%] bg-white flex flex-row">
        <div className="w-1/2 h-full flex items-center justify-center">
          <StackInput />
        </div>
        <div className="w-1/2 h-full">
          <StackFrame />
        </div>
      </div>
    </div>
  );
}
