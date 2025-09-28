import Image from "next/image";

const ClientStory = () => {
    return(<div className="p-10" id="clientStory">
        <h2 className="p-10  text-3xl">Client success stories</h2>
        <div className="flex flex-col justify-center gap-4
        md:flex md:flex-row">

        <div className="h-auto p-10 bg-gray-300 rounded-4xl
        sm:h-[400px]
        md:h-auto">
            <div className="h-[50px] flex w-auto text-center rounded-4xl bg-gray-400">
                    <h2 className="m-auto">Pharmacautical Manufacturing</h2>
            </div>
            <div className="my-5">
                <Image src="/Puzzle.svg" width={30} height={20} />
                <p>Complex multi-tier inventory management across 15 distribution centers</p>
            </div>

            <div className="my-5">
                <Image src="/System.svg" width={30} height={20} />
                <p>Implemented advanced forecasting models and safety stock optimization</p>
            </div>

            <div className="my-5">
                <Image src="/Right.svg" width={30} height={20} />
                <p>Reduced inventory costs by 35% while improving service levels to 99.2%</p>
            </div>

        </div>

        <div className="h-auto p-10 bg-gray-300 rounded-4xl
        sm:h-[400px]
        md:h-auto">
            <div className="h-[50px] flex w-auto text-center rounded-4xl bg-gray-400">
                    <h2 className="m-auto">Agrochemical Distribution</h2>
            </div>
            <div className="my-5">
                <Image src="/Puzzle.svg" width={30} height={20} />
                <p>Seasonal demand volatility and procurement cost optimization</p>
            </div>

            <div className="my-5">
                <Image src="/System.svg" width={30} height={20} />
                <p>Developed S&OP process with advanced planning and supplier collaboration</p>
            </div>

            <div className="my-5">
                <Image src="/Right.svg" width={30} height={20} />
                <p>Achieved 25% procurement cost savings and 40% reduction in stockouts</p>
            </div>

        </div>

        <div className="h-auto p-10 bg-gray-300 rounded-4xl
        sm:h-[400px]
        md:h-auto">
            <div className="h-[50px] flex w-auto text-center rounded-4xl bg-gray-400">
                    <h2 className="m-auto">Seed Industry</h2>
            </div>
            <div className="my-5">
                <Image src="/Puzzle.svg" width={30} height={20} />
                <p>Legacy systems hampering supply chain visibility and efficiency</p>
            </div>

            <div className="my-5">
                <Image src="/System.svg" width={30} height={20} />
                <p>Led comprehensive SAP implementation with process reengineering</p>
            </div>

            <div className="my-5">
                <Image src="/Right.svg" width={30} height={20} />
                <p>Improved order fulfillment by 45% and reduced operational costs by 30%</p>
            </div>

        </div>

        </div>
        
    </div>)
};

export default ClientStory;