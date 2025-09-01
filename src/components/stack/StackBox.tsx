import { StackType } from "./stack";

type StackBoxProps = {
  stackItem: StackType;
};
export default function StackBox({ stackItem }: StackBoxProps) {
  return (
    <div className="w-full h-10 flex justify-center items-center">
      <div className="bg-gray-400">{stackItem.value}</div>
    </div>
  );
}
