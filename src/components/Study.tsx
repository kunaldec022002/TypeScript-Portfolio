import StudyCard from "./StudyCard"
import UG from "../assets/ug.png"
import PG from "../assets/pg.png"
import MERN from "../assets/mern.png"

const Study = () => {
  return (
    <div className="min-h-screen mt-40 lg:mt-10">
      <h2 className="  font-semibold text-6xl text-center">
        Study
      </h2>
      <div>
        <StudyCard img={PG} gradiuate="Post-Gradiuate " date="July 2023 ~ July 2025" course="Master of Computer Applications-(MCA) (Persuing)" collageName="G H Raisoni College of Engineering ,Amravati"/>
        <StudyCard img={UG} gradiuate="Gradiuate" date=" July 2020 ~ July 2023" course="Bachelor of Computer Applications-(BCA)" collageName="Shri.Shivaji Science College, Amravati"/>
        <StudyCard img={MERN} gradiuate="MERN STACK" date=" MAY 2023 ~  DEC 2024" course="MERN" collageName="ROAD TO CODE, NAGPUR"/>
        </div>

    </div>
  )
}

export default Study