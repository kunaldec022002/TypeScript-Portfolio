import Footer from "../components/Footer";
import GetInTouch from "../components/GetInTouch";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import TextRevealCmp from "../components/Quote";
import Projects from "../components/Projects";
import Todo from "../components/Todo";
import Study from "../components/Study";
import BackToTopButton from "../components/BackToTop";
import { SkillLoader } from "../components/SkillLoader";


const Home = () =>{
  return(
    <div>
      <div className="font-mono">
        <Navbar/>
        <HeroSection/>
        <SkillLoader/>
        <TextRevealCmp text={"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."}/>
       <Projects/>
       <Study/>
       <Todo/>
       <GetInTouch/>
       <BackToTopButton/>
       <Footer/>
      </div>
    </div>
  )
}

export default Home;