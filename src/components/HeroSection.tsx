import BoxReveal from "../magicui/BoxRevel";
import profile from "../assets/profile.jpg";
import LetterPullup from "../magicui/LetterPullup";
import { FollowerPointerCard, TitleComponent } from "../magicui/Pointer";
import { TypewriterEffectSmooth } from "../magicui/TypeWriter";
const words = [
  {
    text: "Frontend",
    
  },
  {
    text: "Developer.",
    className: "text-blue-500 dark:text-blue-500",
  },
];
const HeroSection = () => {
  return (
    <div className="min-h-screen mt-10">
      <FollowerPointerCard
        title={
          <TitleComponent
            title={"Kunal"}
            avatar={profile}
          />
        }
      >
        <div className="flex justify-center">
          <BoxReveal boxColor={"#3B82F6"} duration={1}>
            <img
              src={profile}
              alt="Your Image"
              className="w-60 h-60 rounded-full"
            />
          </BoxReveal>
        </div>
        </FollowerPointerCard>
        <div className=" flex flex-col justify-center items-center">
          <LetterPullup words={"Hi :) I'm Kunal"} delay={0.05} />
          {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <ShimmerButton to="">
            <p className="text-2xl lg:text-6xl font-bold cursor-pointer">
              Frontend Developer<span className="text-[#5046e6]">.</span>
            </p>
            </ShimmerButton>   
          </BoxReveal> */}
          <TypewriterEffectSmooth words={words} />

          <BoxReveal boxColor={"#3B82F6"} duration={0.5}>
            <div className="mt-[1.5rem] font-semibold text-lg m-2 text-center">
              <p>
                -&gt; I am a highly motivated Frontend Developer with hands-on experience in building responsive
                 and user-friendly web applications.  <br />
                -&gt; developing and maintaining web applications using
                technologies such as  Typescript, React, Javascript,Tailwindcss<br />
                -&gt; Animations and design using MagicUI,Accernity,FramerMotion. <br />
              </p>
            </div>
          </BoxReveal>

          
        </div>
    </div>
  );
};

export default HeroSection;