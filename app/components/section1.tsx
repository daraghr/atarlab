import Triad from "../ui/triad";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faGraduationCap, faChalkboardUser } from "@fortawesome/free-solid-svg-icons";

const section1 = () => {
    return ( 
        <div className="flex flex-row w-[90vw] max-w-[1200px] mx-auto justify-between space-x-2" id="explore">
            <Triad 
                icon={faChalkboardUser}
                heading={<>By Students, <span className="font-black text-[#000]">For Students</span></>}
                content={<>We are a program developed and run by recent graduates, ensuring that our instruction is up-to-date, effective, and relevant</>}
            />
            <Triad 
                icon={faGraduationCap}
                heading={<><span className="font-black text-[#000]">Unrivaled</span> Experience</>}
                content={<>Our programs are developed by ex-students who received the maximum study score (50 Raw) in their respective subjects, allowing us to maintain an unmatched level of success and experience</>}
            />
            <Triad 
                icon={faStar}
                heading={<><span className="font-black text-[#000]">Success.</span> Guaranteed.</>}
                content={<>Our promise of a guaranteed 40+ Raw study score in any of our offered subjects holds us to the highest standard</>}
            />

        </div>
     );
}
 
export default section1;