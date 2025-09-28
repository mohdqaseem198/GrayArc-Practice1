import Image from "next/image";

const TransformationLeft = () => {
    return(<div id = "TransformationLeft" className="">
        <h2 className="text-3xl">Start Your Transformation</h2>
        <p className="my-5">Ready to transform your supply chain? Let's discuss how strategic consulting can drive exceptional results for your business</p>
        <div className="flex">
            <div className="flex flex-row justify-start gap-8 m-auto
            md:my-5" id="email">
                <div className="flex bg-gray-300 w-[60px] h-[60px] rounded-full">
                    <Image className="m-auto" src="/Gmail.svg" width={30} height={20} />
                </div>
                <div>
                    <h2 className="font-bold">Email</h2>
                    <a href="mailto:info@vanrao.com">info@vanrao.com</a>
                    <p className="text-[12px] text-gray-600">Response within 24 hours</p>
                </div>
            </div>
        </div>

        <div className="flex">
            <div className="flex flex-row justify-start gap-8 m-auto
            md:my-5" id="email">
                <div className="flex bg-gray-300 w-[60px] h-[60px] rounded-full">
                    <Image className="m-auto" src="/Phone.svg" width={30} height={20} />
                </div>
                <div>
                    <h2 className="font-bold">Phone</h2>
                    <a href="tel:9619391832">+91 9619391832</a>
                    <p className="text-[12px] text-gray-600">Available for consultations</p>
                </div>
            </div>
        </div>

        <div className="flex">
            <div className="flex flex-row justify-start gap-8 m-auto
            md:my-5" id="email">
                <div className="flex bg-gray-300 w-[60px] h-[60px] rounded-full">
                    <Image className="m-auto" src="/Map.svg" width={30} height={20} />
                </div>
                <div>
                    <h2 className="font-bold">Coverage</h2>
                    <a href="tel:9619391832">India & Southeast Asla</a>
                    <p className="text-[12px] text-gray-600">Remote and on-site consulting</p>
                </div>
            </div>
        </div>

        <div className="flex">
            <div className="flex flex-row justify-start gap-8 m-auto
            md:my-5" id="email">
                <div className="flex bg-gray-300 w-[60px] h-[60px] rounded-full">
                    <Image className="m-auto" src="/LinedIn.svg" width={30} height={20} />
                </div>
                <div>
                    <h2 className="font-bold">LinkedIn</h2>
                    <a href="https://in.linkedin.com/company/greyarcco" target="_blank">Connect on LinkedIn</a>
                    <p className="text-[12px] text-gray-600">Company Profile</p>
                </div>
            </div>
        </div>
    </div>)
};

export default TransformationLeft;