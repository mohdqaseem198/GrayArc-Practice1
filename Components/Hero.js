"use client";
import { add } from "@/Store/SampleSlice";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import HeroTraffic from "./HeroTraffic";

const Hero = () => {

    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const HandleClick = () => {
        console.log('button clicked!');
        dispatch(add(count));
        setCount(count + 1);
    };

    return(<div className="p-0 sm:p-10" id="hero">
            <div className="text-center
            grid grid-cols-1
            md:grid md:grid-cols-3
            lg:grid lg:grid-cols-3
            xl:grid xl:grid-cols-3">
                <div className="col-span-1 px-2 mr-0 bg-gray-100 rounded-3xl
                md:col-span-2 md:pl-10
                lg:col-span-2 lg:pl-10
                xl:col-span-2 xl:pl-10">
                    <h3 className="flex mb-3 mt-20 font-intel text-start text-[30px]">Formula to Fulfillment</h3>
                    <pre className="whitespace-pre-line text-start">Leading supply chain consulting services in India for pharmaceutical, chemical, and
                        agrochemical industries. We provide expert SAP supply chain implementation, regulatory
                        compliance support, and logistics optimization services that deliver up to 35% cost 
                        reduction. We specialize in hazardous materials logistics, vendor management
                        consultancy, and digital transformation across India & Southeast Asia.</pre>
                        <div className="text-center mt-10
                        md:text-start
                        lg:text-start
                        xl:text-start">
                            <button className="w-full  bg-black text-white p-2 rounded-3xl cursor-pointer
                            sm:w-[200px]">Consult Now
                                <span className="inline-block ml-2"><svg className="" width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6844 0.157795C13.888 0.0421962 14.1506 -0.0135541 14.4144 0.00279967C14.6783 0.0191534 14.9218 0.106272 15.0915 0.245005L21.7528 5.69568C21.8405 5.76406 21.9073 5.84371 21.9493 5.92994C21.9912 6.01618 22.0074 6.10726 21.9969 6.19783C21.9864 6.2884 21.9495 6.37663 21.8883 6.45732C21.8271 6.53802 21.7428 6.60955 21.6404 6.66771C21.5381 6.72587 21.4197 6.76949 21.2922 6.79599C21.1648 6.8225 21.0308 6.83135 20.8983 6.82204C20.7657 6.81273 20.6373 6.78544 20.5204 6.74178C20.4036 6.69811 20.3007 6.63896 20.2179 6.56779L13.5565 1.11711C13.387 0.978314 13.3052 0.79929 13.3292 0.619399C13.3532 0.439508 13.481 0.273473 13.6844 0.157795Z" fill="#F3F4F6"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6844 12.1057C13.481 11.99 13.3532 11.824 13.3292 11.6441C13.3052 11.4642 13.387 11.2852 13.5565 11.1464L20.2179 5.69568C20.3007 5.62451 20.4036 5.56535 20.5204 5.52169C20.6373 5.47802 20.7657 5.45073 20.8983 5.44142C21.0308 5.43211 21.1648 5.44097 21.2922 5.46747C21.4197 5.49398 21.5381 5.53759 21.6404 5.59575C21.7428 5.65392 21.8271 5.72545 21.8883 5.80614C21.9495 5.88684 21.9864 5.97506 21.9969 6.06563C22.0074 6.1562 21.9912 6.24728 21.9493 6.33352C21.9073 6.41976 21.8405 6.49941 21.7528 6.56779L15.0915 12.0185C14.9218 12.1572 14.6783 12.2443 14.4144 12.2607C14.1506 12.277 13.888 12.2213 13.6844 12.1057Z" fill="#F3F4F6"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9863 6.13173C20.9863 6.31243 20.881 6.48573 20.6936 6.6135C20.5062 6.74128 20.2521 6.81306 19.987 6.81306L1.00028 6.81306C0.735249 6.81306 0.48107 6.74128 0.293665 6.6135C0.106258 6.48573 0.000976525 6.31243 0.000976533 6.13173C0.000976541 5.95103 0.106258 5.77773 0.293665 5.64995C0.48107 5.52218 0.735249 5.45039 1.00028 5.45039L19.987 5.45039C20.2521 5.45039 20.5062 5.52218 20.6936 5.64995C20.881 5.77773 20.9863 5.95103 20.9863 6.13173Z" fill="#F3F4F6"/>
                                </svg></span>
                            </button>
                        </div>
                        <div className="mb-5">
                            <HeroTraffic />
                        </div>
                </div>
                <div className="col-span-1 ml-3 justify-items-center  overflow-hidden rounded-2xl h-auto">
                    <Image src="/PromiseImg1.png" className="rounded-2xl w-full h-full" alt="PromiseImg" width={350} height={0}/>
                </div>
            </div>
    </div>)
};

export default Hero;