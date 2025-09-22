import Image from "next/image";

const MeetCards = () => {
    return(<div id="MeetCards">

        <div className="flex flex-col justify-center gap-2
        md:flex md:flex-row">
            <div className="w-[200px] h-[280px] p-5 m-auto bg-gray-300 rounded-4xl
            md:w-[300px] md:h-[280px]">
                <Image src="/Vector.svg" height={0}  width={50} />
                <pre className="whitespace-pre-line text-[20px]
                md:text-[25px]">Checmical Industry leadership</pre>
                <pre className="whitespace-pre-line">
{`Speciality chemicals,
agrochemicals & pharma expertise`}
                </pre>
            </div>

            <div className=" w-[200px] h-[280px] p-5 m-auto bg-gray-800 rounded-4xl
            md:w-[300px] md:h-[280px]">
                <Image src="/World.svg" height={0}  width={50} />
                <pre className="whitespace-pre-line text-white text-[20px]
                md:text-[25px]">SAP Supply Chain Expert</pre>
                <pre className="whitespace-pre-line text-white">
{`Trusted by CXOs & supply chain heads`}
                </pre>
            </div>

            <div className="w-[200px] h-[280px] p-5 m-auto bg-gray-300 rounded-4xl
            md:w-[300px] md:h-[280px]">
                <Image src="/Cap.svg" height={0}  width={50} />
                <pre className="whitespace-pre-line text-[20px]
                md:text-[25px]">Decision-Maker Advisor</pre>
                <pre className="whitespace-pre-line">
{`Enterprise ERP
implementations`}
                </pre>
            </div>

            <div className="w-[200px] h-[280px] p-5 m-auto bg-gray-800 rounded-4xl
            md:w-[300px] md:h-[280px]">
                <Image src="/Batch.svg" height={0}  width={50} />
                <pre className="whitespace-pre-line text-white text-[20px]
                md:text-[25px]">Measurable Results</pre>
                <pre className="whitespace-pre-line text-white">
{`Up to 35% cost reduction
with compilance`}
                </pre>
            </div>
        </div>

    </div>)
};

export default MeetCards;