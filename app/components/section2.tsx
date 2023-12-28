import Subject from "../ui/subject";
import { faPen, faCalculator, faMoneyBill, faPerson, faBriefcase, faDumbbell } from "@fortawesome/free-solid-svg-icons";

const section2 = () => {
    return ( 
        <div className="flex relative flex-col py-12">
            <h1 className="text-5xl text-center inline-block py-12 font-bold">Our Subjects</h1>
            <div className="mx-4 grid 2xl:grid-cols-6 grid-cols-3 self-center justify-self-center grow justify-center w-auto gap-12">
                <Subject 
                    icon={faPen}
                    subject="English"
                    units="1/2 & 3/4"
                />
                <Subject 
                    icon={faCalculator}
                    subject="General Mathematics"
                    units="3/4"
                />
                <Subject 
                    icon={faMoneyBill}
                    subject="Economics"
                    units="3/4"
                />
                <Subject 
                    icon={faBriefcase}
                    subject="Business Management"
                    units="3/4"
                />
                <Subject 
                    icon={faDumbbell}
                    subject="Physical Education"
                    units="3/4"
                />
                <Subject 
                    icon={faPerson}
                    subject="Sociology"
                    units="3/4"
                />
            </div>
        </div>
        
     );
}
 
export default section2;