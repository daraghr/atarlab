// import Link from "next/link";

const button = (props) => {
    return ( 
        <>
            <a href={props.link} className={`text-xl font-black px-[30px] py-[15px] ${props.colors} rounded-md inline-block`}>{props.content}</a>
        </>
     );
}
 
export default button;