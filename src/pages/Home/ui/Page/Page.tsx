import { MainContainer } from "@/widgets";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <section>
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-[#EFF6FF]">
          <h1 className="mb-4 font-sans text-[2rem] font-bold text-deep-blue">
            Select Your Top 5 Skills
          </h1>
          <MainContainer />
        </div>
      </section>
    </>
  );
};

export default Home;
