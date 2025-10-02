import ConsultationProcess from "./ConsultationProcess";
import TransformationLeft from "./TransformationLeft";
import TransformationRight from "./TransformationRight";

const Transformation = () => {
    return(<div>
            <div id="Transformation" className="grid grid-cols-1 p-0
            sm:p-10
            md:grid-cols-4" >
                <div className="col-span-1 flex
                md:col-span-1">
                    <TransformationLeft />
                </div>
                <div className="col-span-1 bg-gray-200 rounded-4xl
                md:col-span-3 md:ml-2">
                    <TransformationRight />
                </div>
            </div>

            <div>
                <ConsultationProcess />
            </div>
    </div>)
};

export default Transformation;