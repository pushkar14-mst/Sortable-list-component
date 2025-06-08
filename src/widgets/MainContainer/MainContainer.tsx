import SkillSelectorContainer from "./ui/SkillSelectorContainer";

const MainContainer: React.FC = () => {
  return (
    <>
      <div className="flex h-full max-h-[500px] w-full max-w-[720px] rounded-lg bg-white p-[64px] shadow-[0px_44px_64px_rgba(39,99,235,0.1)]">
        <SkillSelectorContainer />
      </div>
    </>
  );
};
export default MainContainer;
