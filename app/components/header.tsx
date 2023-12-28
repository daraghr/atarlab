import Logo from "../ui/logo";
import Nav from "../ui/nav";

const header = () => {
    return ( 
        <div className="flex flex-row justify-between px-10 py-6">
            <Logo className="w-[150px] h-[50px] fill-blue"/>
            <Nav />
        </div>
     );
}
 
export default header;