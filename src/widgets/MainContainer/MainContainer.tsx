import SkillSelectorContainer from "./ui/SkillSelectorContainer";

const MainContainer: React.FC = () => {
  return (
    <>
      <div className="flex h-full max-h-[500px] w-full max-w-[720px] rounded-lg bg-white p-[64px] shadow-lg">
        <SkillSelectorContainer />
      </div>
    </>
  );
};
export default MainContainer;
