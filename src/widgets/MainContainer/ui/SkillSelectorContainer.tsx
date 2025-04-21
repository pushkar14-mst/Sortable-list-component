import SkillInput from "../components/SkillInput";

const SkillSelectorContainer: React.FC = () => {
  return (
    <>
      <div className="relative flex flex-col gap-3">
        {Array.from({ length: 5 }, (_, idx) => (
          <SkillInput index={idx} key={idx} />
        ))}
      </div>
    </>
  );
};
export default SkillSelectorContainer;
