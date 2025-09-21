"use client";
import { add } from "@/Store/SampleSlice";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

const Hero = () => {

    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const HandleClick = () => {
        console.log('button clicked!');
        dispatch(add(count));
        setCount(count + 1);
    };

    return(<div className="h-[1072] bg-gray-100" id="hero">
            <div className="grid grid-cols-3 text-center">
                <div className="col-span-2">
                    <h3 className="font-intel text-[30px]">Formula to Fulfillment</h3>
                    <pre className="whitespace-pre-line">Leading supply chain consulting services in India for pharmaceutical, chemical, 
                        and agrochemical industries. 
                        We provide expert SAP supply chain implementation, regulatory compliance support, 
                        and logistics optimization services that deliver up to 35% cost reduction.
                         We specialize in hazardous materials logistics, vendor management consultancy, 
                        and digital transformation across India & Southeast Asia.</pre>
                        <div className="">
                            <button onClick={() => HandleClick()} className="bg-black text-white p-2 rounded-3xl cursor-pointer">Consult Now</button>
                        </div>
                </div>
                <div className="col-span-1 justify-items-center  overflow-hidden rounded-2xl">
                    <Image src="/PromiseImg.png" className="rounded-2xl scale-130" alt="PromiseImg" width={360} height={200}/>
                </div>
            </div>
    </div>)
};

export default Hero;