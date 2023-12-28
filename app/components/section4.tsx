import Image from "next/image";

const section4 = () => {
    return ( 
        <div className="h-[400px] flex">
            <div className="flex flex-col flex-1 items-center justify-center">
                <Image 
                    src={'/mockup.png'}
                    alt='mockup'
                    width={360}
                    height={288}
                />
            </div>
            <div className="flex flex-1 flex-col text-center justify-center space-y-6 p-6">
                <div className="max-w-[30vw] mx-auto">
                    <h2 className="font-black text-xl">1000+ pages of  resources included with your enrolment</h2>
                    <p className="text-[#474747]">Our curated resources are available to all students free of charge or can be purchased separately. These include study notes, practice SACs, exams, sample essays and more.</p>
                </div>
            </div>
        </div>
     );
}
 
export default section4;