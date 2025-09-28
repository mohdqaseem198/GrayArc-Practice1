import Image from "next/image";

const ConsultationProcess = () =>{
    return<div className="p-10" id="ConsultationProcess">
        <div>
            <h2 className="text-[20px] my-5">Consultation Process</h2>
        </div>
        <div className="flex flex-col justify-center
        sm:flex-row sm:align-middle">
            <div className="flex flex-col
            md:flex-row">
                <div className="m-auto my-2
                md:my-0">
                    <div className="w-[200px]  rounded-4xl bg-gray-800">
                        <Image className="ml-5 py-10" src="/1.svg" width={15} height={20}  />
                        <h2 className="m-auto px-5 pb-10 text-white">Initial discussion to understand your chanllenges</h2>
                    </div>
                </div>
                <div className="hidden
                md:flex">
                        <Image src="/Arrow.svg" width={50} height={20} />
                </div>
            </div>

            <div className="flex flex-col
            md:flex-row">
                <div  className="m-auto my-2
                md:my-0">
                    <div className="w-[200px]  rounded-4xl bg-gray-800">
                        <Image className="ml-5 py-10" src="/2.svg" width={25} height={20}  />
                        <h2 className="m-auto px-5 pb-10 text-white">Assessment of current supply chain operations</h2>
                    </div>
                </div>
                <div  className="hidden
                md:flex">
                        <Image src="/Arrow.svg" width={50} height={20} />
                </div>
            </div>

            <div className="flex flex-col
            md:flex-row">
                <div className="m-auto my-2
                md:my-0">
                    <div className="w-[200px]  rounded-4xl bg-gray-800">
                        <Image className="ml-5 py-10" src="/3.svg" width={25} height={20}  />
                        <h2 className="m-auto px-5 pb-10 text-white">Customized solution proposal and roadmap</h2>
                    </div>
                </div>
                <div  className="hidden
                md:flex">
                        <Image src="/Arrow.svg" width={50} height={20} />
                </div>
            </div>

            <div className="flex flex-row">
                <div className="m-auto my-2
                md:my-0">
                    <div className="w-[200px]  rounded-4xl bg-gray-800">
                        <Image className="ml-5 py-10" src="/4.svg" width={25} height={20}  />
                        <h2 className="m-auto px-5 pb-10 text-white">Customized solution proposal and roadmap</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default ConsultationProcess;