import Image from "next/image";

const Meet = () => {
    return(<div className="p-10" id="Meet">
            <div className="flex flex-col p-10
            md:flex md:flex-row">
                <div>
                    <h2 className="text-3xl">Meet
                        <span className="block"> Ramakrishnan A.R</span></h2>
                        <pre className="whitespace-pre-wrap">
                        {`
A trusted advisor to supply chain heads, procurement managers, CXOs,
and SAP project leads across chemical, agrochemical, pharmaceutical,
and specialty manufacturing sectors.

With over 38 years of distinguished experience serving decision-makers in
manufacturing, Ramakrishnan A. R. has established himself as a premier
supply chain strategist and SAP implementation expert. His journey spans
leadership roles at renowned organizations including Bayer CropScience,
Hoechst, Agrevo, Aventis, Cipla, Kopran, and USV across India and Southeast Asia.

His expertise encompasses regulated supply chain environments - from
chemical REACH compliance and agrochemical hazardous goods movement
to pharmaceutical cold chain management. As a certified SAP supply chain
expert, he brings scalable solutions designed for SMEs to large enterprises
with procurement operations exceeding USD 350 million.
                        `}
                        </pre>
                </div>
                <div className="w-[inherit] h-[inherit] m-auto overflow-hidden rounded-3xl
                md:w-[350px] md:h-[350px]">
                    <Image className="m-auto scale-120 " src="/PromiseImg1.png" height={0} width={350} />
                </div>
            </div>
    </div>)
};

export default Meet;