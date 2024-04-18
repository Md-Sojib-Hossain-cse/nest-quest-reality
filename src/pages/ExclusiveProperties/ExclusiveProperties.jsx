import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import ExProperty from "../../components/ExProperty/ExProperty";

const ExclusiveProperties = () => {
    const propertyDatas = useLoaderData();
    return (
        <div>
            <Helmet>
                <title> NestQuest Reality | ExClusive Properties</title>
            </Helmet>
            <h2 className="text-3xl font-semibold text-center italic mt-6">Luxury Haven: Explore Our Exclusive Collection</h2>
            <p className="text-lg font-medium italic mt-2 text-center w-full md:w-11/12 lg:w-10/12 mx-auto p-4">Step into a world of unparalleled luxury and sophistication with our exclusive collection of premier properties. From breathtaking waterfront villas to chic urban lofts and secluded mountain retreats, each residence offers a unique blend of elegance, comfort, and indulgence. Discover your dream home and elevate your lifestyle with our handpicked selection of exclusive properties.</p>
            <div className="grid gap-6">
                {
                    propertyDatas.map((property , index) => <ExProperty key={index} property={property}></ExProperty>)
                }
            </div>
        </div>
    );
};

export default ExclusiveProperties;