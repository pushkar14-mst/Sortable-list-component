import { useDispatch, useSelector } from "react-redux";
import { ISkillInputProps, ISkillOptionProps } from "../types/types";
import {
  selectIsEditing,
  selectSelectedIndex,
  setInputValue,
  setIsEditing,
  setSelectedIndex,
} from "@/app/input-store";
import skills from "../model/skills";

const SkillInput: React.FC<ISkillInputProps> = ({ index }) => {
  const dispatch = useDispatch();
  const isEditing = useSelector(selectIsEditing);
  const selectedIndex = useSelector(selectSelectedIndex);
  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    dispatch(setInputValue(value));
  };

  const handleSelectSkill = (skill: string) => {
    dispatch(setInputValue(skill));
    dispatch(setIsEditing(false));
    dispatch(setSelectedIndex(-1));
  };
  return (
    <>
      <div className="border-1 flex h-full max-h-[60px] w-full max-w-[392px] rounded-lg border-gray-300 bg-input-white p-[16px]">
        <div className="flex w-full items-center justify-between">
          <input
            type="text"
            id={`skill-${index}`}
            placeholder={`${index + 1}. Add a skill`}
            onChange={handleSkillChange}
            onFocus={() => {
              dispatch(setIsEditing(true));
              dispatch(setSelectedIndex(index));
            }}
            onBlur={() => {
              dispatch(setIsEditing(false));
              dispatch(setSelectedIndex(-1));
            }}
            className="placeholder:text-input-placeholder w-full bg-transparent font-sans text-[1.5rem] text-lg font-normal text-deep-blue placeholder:font-light placeholder:text-placeholder-gray focus:outline-none"
          />
          <span className="text-[1rem] font-bold text-deep-blue">+</span>
        </div>
      </div>
      {isEditing && selectedIndex === index && (
        <SkillOptions id={index} onSelectSkill={handleSelectSkill} />
      )}
    </>
  );
};

export default SkillInput;

const SkillOptions: React.FC<ISkillOptionProps> = ({ id, onSelectSkill }) => {
  return (
    <>
      <div
        className="absolute top-[60px] z-10 mt-[3px] flex max-h-[127px] w-full max-w-[392px] flex-col overflow-auto rounded-lg border-gray-300 bg-input-white py-[16px]"
        key={id}
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex h-full w-full items-center justify-between border-gray-300 bg-input-white px-4 py-2 hover:cursor-pointer hover:bg-[#E3E5F1]"
            onClick={() => onSelectSkill(skill)}
          >
            <span className="text-[1rem] font-light text-placeholder-gray">
              {skill}
            </span>
            <span className="text-[1rem] font-normal text-deep-blue">+</span>
          </div>
        ))}
      </div>
    </>
  );
};
