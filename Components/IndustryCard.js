import Image from "next/image";

const  IndustryCard = ({img , head, para}) => {
    return(<div className="flex flex-col w-auto bg-gray-800 rounded-4xl text-white
    sm:flex-row sm:w-auto
    lg:w-[500px]" id="IndustryCard">
        <div className="flex justify-center bg-gray-100 p-10 rounded-4xl m-3">
            <Image src= {img} alt="img" width={150} height={50} />
        </div>
        <div>
            <h2 className="my-5 font-bold">{head}</h2>
            <p className="mb-5 text-[12px] text-gray-400">{para}</p>
        </div>
    </div>)
};

export default IndustryCard;