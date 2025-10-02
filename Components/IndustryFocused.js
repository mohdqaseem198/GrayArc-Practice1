import Image from "next/image";
import IndustryCard from "./IndustryCard";

const IndustryFocused = () => {

    const Industries = [
  {
    img: "/Industry1.svg",
    head: "Inventory Planning & Forecasting",
    para: "Transform your pharmaceutical and agrochemical inventory management with sophisticated forecasting models optimized for regulatory compliance and seasonal demand patterns."
  },
  {
    img: "/Industry2.svg",
    head: "Procurement Strategy & Vendor Management",
    para: "End-to-end procurement transformation for chemical and seed manufacturing, including vendor alignment, cost optimization, and regulatory compliance strategies."
  },
  {
    img: "/Industry3.svg",
    head: "SAP Supply Chain Implementation",
    para: "Complete SAP-enabled digital transformation from Excel-based operations to enterprise ERPs, specializing in pharmaceutical and chemical industry requirements."
  },
  {
    img: "/Industry4.svg",
    head: "Logistics & Cold Chain Optimization",
    para: "Specialized logistics optimization for pharmaceutical cold chain, hazardous goods movement, and agrochemical distribution with up to 20% cost reduction."
  },
  {
    img: "/Industry5.svg",
    head: "S&OP Planning for Manufacturing",
    para: "Sales & Operations Planning implementation tailored for pharmaceutical, chemical, and seed manufacturing with cross-functional alignment and regulatory considerations."
  }
];


    return(<div className="px-10
    md:mx-auto" id="IndustryFocused">
            <div className="mx-0 mb-20 flex flex-col
            sm:mb-40
            md:mb-20 md:flex-row">
                <div className="w-[inherit]">
                    <h2 className="mx-10 mt-5 text-3xl whitespace-pre-wrap
                    sm:m-auto">
{`Industry-Focused Supply
Chain Solutions`}</h2>
                    <Image src="/Airoplane.svg" width={600} height={20} />
                </div>

                <div className=" px-auto mt-10  flex flex-col gap-4
                md:left-[50%] md:m-0">
                    {Industries && Industries.map((single, index) => {
                        return <IndustryCard key={index} img={single.img} head={single.head} para={single.para} />
                    })}
                </div>
            </div>
    </div>)
};

export default IndustryFocused;