import { ISkillInputProps } from "../types/types";

const SkillInput: React.FC<ISkillInputProps> = ({ index }) => {
  return (
    <>
      <div className="border-1 flex h-full max-h-[60px] w-full max-w-[392px] rounded-lg border-gray-300 bg-input-white p-[16px]">
        <div className="flex w-full items-center justify-between">
          <input
            type="text"
            placeholder={`${index + 1}. Add a skill`}
            className="placeholder:text-input-placeholder w-full bg-transparent font-sans text-[1.5rem] font-semibold text-deep-blue placeholder:font-light placeholder:text-placeholder-gray focus:outline-none"
          />
          <span className="text-[1.5rem] font-bold text-deep-blue">+</span>
        </div>
      </div>
    </>
  );
};

export default SkillInput;
