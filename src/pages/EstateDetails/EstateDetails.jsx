import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    const estatesData = useLoaderData();
    const estateIdString = useParams();
    const estateIdInt = parseInt(estateIdString.id);
    const currentEstate = estatesData.find(estate => estate.id === estateIdInt)
    const { estate_title, detailed_description, price, status, area, facilities, image, location , banner_title ,banner_description} = currentEstate;
    return (
        <div className="grid md:grid-cols-2 gap-6">
            <Helmet>
                <title> NestQuest Reality | Estate Details</title>
            </Helmet>
            <div className="relative md:col-span-2 h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
                <img src={image} alt="property image" className="h-full w-full object-cover rounded-lg" />
                <div className="absolute top-1/3 w-full flex flex-col justify-center items-center bg-[#13131333] py-4">
                    <h5 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-6 text-center">{banner_title}</h5>
                    <p className="text-lg w-10/12 mx-auto text-center hidden md:flex text-gray-200 mb-2">{banner_description}</p>
                    <button className="btn text-lg shadow-lg font-bold w-40">Book Now</button>
                </div>
            </div>
            <div>
                <h4 className="text-2xl text-gray-800 mb-4 font-bold pl-4">{estate_title}</h4>
                <p className="text-lg font-medium text-gray-800 mb-3 pl-4"><span className="text-lg text-green-500">Details</span> : {detailed_description}</p>
            </div>
            <div className="pl-4 lg:pl-16 flex justify-end items-left flex-col">
                <p className="text-lg font-medium text-gray-800 mb-2"><span className="text-lg text-green-500">Status</span> : {status}</p>
                <ul className="mb-3 font-bold">
                    <span className="text-lg text-green-500">Facilities</span> :
                    {
                        facilities.map((facility, index) => <li className="list-inside list-disc" key={index}>{facility}</li>)
                    }
                </ul>
                <p className="text-lg font-medium text-gray-800 mb-2"><span className="text-lg text-green-500">Area</span> : {area}</p>
                <p className="text-sm font-medium text-gray-800 mb-2"><span className="text-lg text-green-500">Location</span> : {location}</p>
                <p className="text-lg font-medium text-gray-800 mb-3"><span className="text-lg text-green-500">Price</span> : {price}</p>
            </div>
        </div>
    );
};

export default EstateDetails;