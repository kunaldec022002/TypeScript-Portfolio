import ProjectCard from "../ProjectCard";
import BigBazar from "../../assets/bigBazar.png"
import NewsApp from "../../assets/news.png"
import WasteFood from "../../assets/wasteFood.png"

const bigBazar = [
  "https://cdn-icons-png.flaticon.com/128/732/732212.png",
  "https://cdn-icons-png.flaticon.com/128/732/732190.png",
  "https://img.icons8.com/?size=48&id=20906&format=png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  "https://img.icons8.com/color/48/nodejs.png",
  "https://img.icons8.com/officel/80/express-js.png",
  "https://img.icons8.com/color/48/mongo-db.png",
];

const newsApp = [
  "https://cdn-icons-png.flaticon.com/128/732/732212.png",
  "https://cdn-icons-png.flaticon.com/128/732/732190.png",
  "https://img.icons8.com/?size=48&id=20906&format=png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
   "https://img.icons8.com/color/48/api.png" 
];

const wastefood = [
  "https://cdn-icons-png.flaticon.com/128/732/732212.png",
  "https://cdn-icons-png.flaticon.com/128/732/732190.png",
  "https://cdn-icons-png.flaticon.com/128/5968/5968292.png",
  "https://img.icons8.com/3d-fluency/100/python.png",
  "https://img.icons8.com/nolan/100/flask.png",
   "https://img.icons8.com/color/480/mysql-logo.png"
]

const Working = () => {
  return (
    <div className="flex flex-wrap gap-60 lg:gap-0 justify-center mt-20">
      <ProjectCard
        to="https://big-bazar-2-terd.onrender.com"
        github="https://big-bazar-2-terd.onrender.com"
        techStack={bigBazar}
        projectLink="https://big-bazar-2-terd.onrender.com"
        img={BigBazar}
        projectName="Big Bazar"
        desc="Big Bazar eCommerce website is a comprehensive online shopping platform designed to offer a seamless user experience for browsing and purchasing a wide range of products. Built using modern web technologies using frontend and backend stack. "
      />

      <ProjectCard
        to="https://github.com/kunaldec022002/News-App/"
        github="https://big-bazar-2-terd.onrender.com"
        techStack={newsApp}
        projectLink="Not to deploy"
        img={NewsApp}
        projectName="News App"
        desc="This News App is a dynamic and responsive platform designed to deliver the latest news across various categories. The app provides users with a seamless way to stay informed by aggregating news from multiple sources and presenting them in an easy-to-navigate interface."
      />

      <ProjectCard
        to="https://github.com/kunaldec022002/WasteFood_Distribution"
        github="https://github.com/kunaldec022002/WasteFood_Distribution"
        techStack={wastefood}
        projectLink="Not Deploy"
        img={WasteFood}
        projectName="Waste Food Distribution"
        desc="The Waste Food Distribution System is a web-based platform designed to reduce food waste and combat hunger by connecting food donors (restaurants, events, households) with nearby NGOs, shelters, and individuals in need. "
      />
    </div>
  );
};

export default Working;
