import { StackType } from "./stack";

type StackBoxProps = {
  stackItem: StackType;
};
export default function StackBox({ stackItem }: StackBoxProps) {
  return (
    <div className="w-full h-10 flex">
      <div className="w-full bg-gray-400 flex justify-center items-center">
        {stackItem.value}
      </div>
    </div>
  );
}
