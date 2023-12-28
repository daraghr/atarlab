import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colors } from "../layout";


const subject = (props) => {
    return ( 
        <div className='w-[180px] h-[180px] place-self-center bg-blue/10 rounded-lg flex flex-col items-center justify-center text-blue px-2'>
            <FontAwesomeIcon className="w-10 h-10 m b-4" icon={props.icon} />
            <h2 className='font-bold text-xl text-center leading-[100%] py-1'>{props.subject}</h2>
            <p className='text-sm'>Units {props.units}</p>
        </div>
     );
}
 
export default subject;