import { StackType } from "./stack";
import StackBox from "./StackBox";

export function StackFrame() {
  const stackItems: StackType[] = [];
  const handleStackPop = () => {
    alert("pop");
  };
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2">
      <div className="w-[80%] h-[80%] border-l-1 border-b-1 border-r-1 border-black">
        {stackItems.map((item, index) => (
          <StackBox key={`stack-box-${index}`} stackItem={item} />
        ))}
      </div>
      <button
        className="w-[80%] border-black border-1 p-2 rounded-md hover:cursor-pointer"
        type="button"
        onClick={handleStackPop}
      >
        Push
      </button>
    </div>
  );
}
