import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { colors } from "../layout";

const triad = (props) => {
    return ( 
        <div className="px-6 py-12 flex flex-col justify-center items-center text-center space-y-12 flex-1 bg-neutral-100 rounded-3xl">
            <div className="flex flex-col h-[150px] justify-end">
                <FontAwesomeIcon icon={props.icon} style={{color: colors.blue}} className="w-[120px]"/>
            </div>
            <div className="space-y-4 text-[#464646] flex-1">
                <h2 className="font-bold text-2xl">{props.heading}</h2>
                <p>{props.content}</p>
            </div>
        </div>
     );
}
 
export default triad;