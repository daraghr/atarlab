import Button from "../ui/button";

const hero = () => {
    return ( 
        <div className="h-[700px] flex flex-col justify-center items-center">
            <div className="text-center w-[60vw] space-y-6">
                <h1 className="bg-gradient-to-br from-blue to-[#FFE604] inline-block font-black text-[rgba(0,0,0,0)] bg-clip-text text-[200px] leading-[90%]">40+</h1>
                <h2 className="text-[#464646] font-medium text-5xl leading-snug">VCE Tutoring, <span className="text-[#000] font-bold">Guaranteed</span> Results.</h2>
                <p className="text-[#464646] text-lg">ATARLabs guarantees a 40+ in your chosen subject(s), or your money back</p>
                <Button link="#explore" content="EXPLORE" colors="bg-black/30 text-white hover:bg-blue"/>
            </div>
        </div>
     );
}
 
export default hero;