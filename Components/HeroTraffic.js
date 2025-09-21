import Hero from "./Hero";

const HeroTraffic = () => {
    return(<div id="HeroTraffic">
    <div className="mt-10 flex flex-col gap-4 justify-start items-center text-center
    md:flex md:flex-row
    lg:flex lg:flex-row
    xl:flex xl:flex-row">

        <div id="350M" className="w-[220px] h-[180px] text-center rounded-2xl bg-white
        md:w-[220px] md:h-[180px]
        lg:w-[220px] lg:h-[180px]
        xl:w-[220px] xl:h-[180px]">
            <h2 className="font-bold text-4xl pt-15">
                350M<span className="text-gray-400">+</span>
            </h2>
            <p className="text-gray-500 text-[20px]
            md:text-[15px]
            lg:text-[20px]">(USD) Procurement Operations Optimized</p>
        </div>

        <div id="38" className="w-[220px] h-[180px] text-center rounded-2xl bg-white">
            <h2 className="font-bold text-4xl pt-15">
                38<span className="text-gray-400">+</span>
            </h2>
            <p className="text-gray-500  text-[20px]
            md:text-[15px]
            lg:text-[20px]">Years in Agrochem & Pharma Expretise</p>
        </div>

        <div id="35" className="w-[220px] h-[180px] text-center rounded-2xl bg-white">
            <h2 className="font-bold text-4xl pt-15">
                35<span className="text-gray-400">%</span>
            </h2>
            <p className="text-gray-500 text-[20px]
            md:text-[15px]
            lg:text-[20px]">Supply Chain Cost Reduction</p>
        </div>

    </div>
    </div>)
};
export default HeroTraffic;