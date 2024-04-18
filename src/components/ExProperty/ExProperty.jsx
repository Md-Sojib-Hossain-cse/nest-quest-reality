import PropTypes from "prop-types"
const ExProperty = ({ property }) => {
    const { title, image, description, selling_price, rental_price_per_night, features } = property;
    return (
        <div className="relative shadow-lg drop-shadow-lg rounded-lg">
            <div className="w-full h-[380px]">
                <img src={image} alt="" className="w-full h-full object-cover rounded-lg" />
                <div className="hidden lg:flex flex-col absolute top-0 right-0 p-6 h-full w-full bg-[#13131333] rounded-lg text-white">
                    <h4 className="text-2xl font-semibold drop-shadow-lg text-center">{title}</h4>
                    <p className="text-base font-normal italic mt-4 text-center px-8">{description}</p>
                    <p className="text-lg font-medium drop-shadow-lg pl-6"><span className="text-base text-green-500">Selling Price</span> : {selling_price}</p>
                    <p className="text-lg font-medium drop-shadow-lg pl-6"><span className="text-base text-green-500">Rent</span> : Per Night / {rental_price_per_night}</p>
                    <span className="text-lg font-medium text-white pl-6 mt-3">Facilities :</span>
                    <ul className="text-base font-normal mt-1 pl-6 grid grid-cols-2">
                        {
                            features.map(feature => <li key={feature} className="list-inside list-disc">{feature}</li>)
                        }
                    </ul>
                </div>
            </div>
            <div className="lg:hidden py-6">
                <h4 className="text-2xl font-semibold drop-shadow-lg text-center">{title}</h4>
                <p className="text-base font-normal italic mt-4 text-center px-8">{description}</p>
                <p className="text-lg font-medium drop-shadow-lg pl-6"><span className="text-base text-green-500">Selling Price</span> : {selling_price}</p>
                <p className="text-lg font-medium drop-shadow-lg pl-6"><span className="text-base text-green-500">Rent</span> : Per Night / {rental_price_per_night}</p>
                <ul className="text-base font-normal mt-3 pl-6">
                    Facilities :
                    {
                        features.map(feature => <li key={feature} className="list-inside list-disc">{feature}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

ExProperty.propTypes = {
    property: PropTypes.object,
}

export default ExProperty;