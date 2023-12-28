import Button from "../ui/button";

const section3 = () => {
    return ( 
        <div className="bg-img1 bg-cover">
            <div className="bg-blue/80 text-white text-center py-[300px]">
                <div className="max-w-[1000px] w-[80vw] mx-auto space-y-6">
                    <h1 className="text-6xl font-bold">Meet our Tutors</h1>
                    <p>Our dedicated, experienced and motivated tutors offer a wealth of knowledge and guidance to ensure your child achieves their desired outcomes</p>
                    <Button link="/about" content="LEARN MORE" colors="bg-white/60 text-blue hover:bg-white/80"/>
                </div>
            </div>
        </div>
     );
}
 
export default section3;