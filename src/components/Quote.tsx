import TextReveal from "../magicui/TextReveal" ;
import { ImQuotesRight } from "react-icons/im";

interface Props{
    text:string
}
const TextRevealCmp=({text}:Props)=> {
  return (
    <div>
           <div className="z-10 flex flex-col items-center justify-center rounded-lg">
           <ImQuotesRight className=" relative top-20 text-4xl"/>

        <TextReveal text={text} />
  
      </div>
    </div>
   
  );
}
export default TextRevealCmp;