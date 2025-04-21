import SkillInput from "../components/SkillInput";

const SkillSelectorContainer: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        {Array.from({ length: 5 }, (_, idx) => (
          <SkillInput index={idx} />
        ))}
      </div>
    </>
  );
};
export default SkillSelectorContainer;
