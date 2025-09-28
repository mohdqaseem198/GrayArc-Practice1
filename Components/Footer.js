import Image from "next/image";

const Footer = () => {
    return(
    <div id="Footer" className="text-center bg-gray-800 rounded-t-4xl">
        <div className="grid grid-cols-1 text-white
        sm:grid sm:grid-cols-4">
            <div className="col-span-1 text-start m-auto mt-20
            sm:col-span-2">
                <h2 className="text-4xl">GrayArc</h2>
                <pre className="mb-10 whitespace-pre-line">
{`Transforming supply chains across pharmaceutical, 
agrochemical, and seed Industries through strategic 
consulting and digital innovation. Vanrao, led by Managing 
Partner Ramakrishnan A.R., delivers 38+ years of proven 
expertise to streamline operations from Excel sheets to 
enterprise ERPs.
`}
                </pre>
                <div className="flex flex-row justify-start gap-4 my-2">
                    <Image src="/GmailGray.svg" height={20} width={30} />
                    <a href="mailto:Info@vanrao.com">Info@vanrao.com</a>
                </div>

                <div className="flex justify-start gap-4 my-2">
                    <Image src="/CallGray.svg" height={20} width={25} />
                    <a href="tel:9619391832">+91 9619391832</a>
                </div>
            </div>

            <div className="mt-20 col-span-1 text-center
            sm:text-start">
                <h2 className="font-bold mb-10">Services</h2>
                <ul>
                    <li className="my-2">Inventory Planning</li>
                    <li className="my-2">Procurement Strategy</li>
                    <li className="my-2">SAP Implementation</li>
                    <li className="my-2">Logistics Optimization</li>
                    <li className="my-2">S&OP Leadership</li>
                </ul>
            </div>
            <div className="mt-20 col-span-1 text-center
            sm:text-start">
                <h2 className="font-bold mb-10">Quick Links</h2>
                <ul>
                    <li className="my-2">About</li>
                    <li className="my-2">Services</li>
                    <li className="my-2">Success Stories</li>
                    <li className="my-2">Credentials</li>
                    <li className="my-2">Contact</li>
                </ul>
            </div>
        </div>

        <div>
            <div className="grid grid-cols-1 py-20 bg-gray-950 rounded-t-4xl text-white
            sm:grid-cols-4">
                <div className="col-span-1 text-start m-auto
                sm:col-span-2">
                    <h2 className="">2025 Vanrao Consulting. All rights reserved.</h2>
                </div>
                <div className="col-span-1
                sm:col-span-2">
                    <a href="https://www.linkedin.com/company/greyarcco/?originalSubdomain=in" target="_blank">LinkedIn</a> | <a href="">Privacy Policy</a> | <a href="">Terms & Conditions</a>
                </div>
            </div>
        </div>

    </div>)
};

export default Footer;