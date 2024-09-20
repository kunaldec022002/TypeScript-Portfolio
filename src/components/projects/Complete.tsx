import ProjectCard from "../ProjectCard";
import MyntraClone from "../../assets/myntra-clone.png"
import NewsApp from "../../assets/news.png";
import MiStore from "../../assets/mistore.png"
import Contact from "../../assets/contact.png"
import Whether from "../../assets/whether.png"

const movieTechstack = [
  "https://cdn-icons-png.flaticon.com/128/732/732212.png",
  "https://cdn-icons-png.flaticon.com/128/732/732190.png",
  "https://img.icons8.com/?size=48&id=20906&format=png",
  "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
];
const miStore = [
  "https://cdn-icons-png.flaticon.com/128/732/732212.png",
  "https://cdn-icons-png.flaticon.com/128/732/732190.png",
  "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
  "https://img.icons8.com/?size=48&id=20906&format=png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
];
const myntraClone = [
    "https://cdn-icons-png.flaticon.com/128/732/732212.png",
    "https://cdn-icons-png.flaticon.com/128/732/732190.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
    "https://ui.aceternity.com/_next/image?url=%2Flogo.png&w=64&q=75"
  ];
  const newsApp = [
    "https://cdn-icons-png.flaticon.com/128/732/732212.png",
    "https://cdn-icons-png.flaticon.com/128/732/732190.png",
    "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  ];
  const WhetherApp = [
    "https://cdn-icons-png.flaticon.com/128/732/732212.png",
    "https://cdn-icons-png.flaticon.com/128/732/732190.png",
    "https://cdn-icons-png.flaticon.com/128/1126/1126012.png",
    "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  ];

const Complete = () => {
  return (
      <div className="flex flex-wrap  lg:h-[160vh] h-fit gap-60 lg:gap-0 justify-center mt-10">
         
         <ProjectCard
          to="https://genuine-dieffenbachia-966c95.netlify.app/"
          github="Myntra-Clone"
          techStack={myntraClone}
          projectLink="https://genuine-dieffenbachia-966c95.netlify.app/"
          img={MyntraClone}
          projectName="Myntra Clone"
          desc="This project is a fully functional clone of the popular Indian e-commerce platform Myntra, designed to demonstrate my expertise in building responsive, user-friendly web applications."
        />
        <ProjectCard
          to="https://movieimdb1.netlify.app/"
          github="Movie_App"
          techStack={movieTechstack}
          projectLink="https://hollywoodapp.netlify.app/"
          img="https://personalportfolioankit.netlify.app/assets/movie-c2e4e740.png"
          projectName="Movie App"
          desc="The movie app is a comprehensive platform designed to help users discover, explore, and enjoy movies from various genres, languages, and countries. With a user-friendly interface and powerful features"
        />
        <ProjectCard
          to="https://mi-store-theta.vercel.app/"
          github="https://github.com/kunaldec022002/Mi_Store"
          techStack={miStore}
          projectLink="https://mi-store-theta.vercel.app/"
          img={MiStore}
          projectName="MI Store"
          desc="
              The Xiaomi Store App is a comprehensive e-commerce platform designed to replicate the functionality and aesthetic of Xiaomi's official store. a smooth shopping,enabling users to browse,  and manage Xiaomi products with ease."
        /> 
         <ProjectCard
          to="https://github.com/kunaldec022002/News-App/"
          github="News-App"
          techStack={newsApp}
          projectLink="Not to deploy"
          img={NewsApp}
          projectName="News App"
          desc="This News App is a dynamic and responsive platform designed to deliver the latest news across various categories. The app provides users with a seamless way to stay informed by aggregating news from multiple sources and presenting them in an easy-to-navigate interface."
        />
        <ProjectCard
          to="https://github.com/kunaldec022002/News-App/"
          github="News-App"
          techStack={newsApp}
          projectLink="https://contactapp18.netlify.app/"
          img={Contact}
          projectName="Contact App"
          desc="Contact App is a sleek and intuitive tool designed to efficiently manage and organize personal or professional contacts. The app allows users to easily add, edit, delete,and providing a seamless experience for managing relationships."
        />
        <ProjectCard
          to="https://whether-app02.netlify.app/"
          github="Whether App"
          techStack={WhetherApp}
          projectLink="https://whether-app02.netlify.app/"
          img={Whether}
          projectName="Whether App"
          desc="Contact App is a sleek and intuitive tool designed to efficiently manage and organize personal or professional contacts. The app allows users to easily add, edit, delete,and providing a seamless experience for managing relationships."
        />

          {/* <ProjectCard
          to="https://github.com/Ankitb3/weather-app"
          github="https://github.com/Ankitb3/road-to-js-icp-3-group-d-"
          techStack={movieTechstack}
          projectLink="https://weather-app64.netlify.app/"
          img="https://personalportfolioankit.netlify.app/assets/roadtocode-43677fb9.png"
          projectName="Road To Code"
          desc="The weather app is a powerful and user-friendly application designed to provide accurate and up-to-date weather information for users. With its intuitive interface and robust features, the app aims to help users plan their day, stay informed about weather conditions."
        /> */}
      </div>
  );
};

export default Complete;