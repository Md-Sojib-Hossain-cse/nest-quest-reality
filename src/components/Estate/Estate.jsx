import PropTypes from "prop-types";
import "./Estate.css"
import { Link } from "react-router-dom";
const Estate = ({ estateData }) => {

    const {id ,  estate_title, short_description, price, status, area, facilities, image, button_text, location } = estateData;

    return (
        <div id="imgDiv" className="grid md:grid-cols-5 lg:grid-cols-1 xl:grid-cols-5 justify-between gap-6 bg-[#13131344] shadow-lg drop-shadow-lg p-4 rounded-lg">
            <div className="relative col-span-3 w-full">
                <img src={image} alt="property image unavailable" className="w-full h-60 md:h-full lg:h-80 xl:h-full object-cover rounded-lg" />
                <div id="filterDiv" className="absolute h-full w-0 bg-[#13131344] top-0 rounded-lg"></div>
                <div className="absolute top-10 right-0 pl-4 pr-2 py-3 bg-[#13131344] rounded-l-lg text-gray-300 font-medium">{area}</div>
            </div>
            <div className="md:col-span-2 lg:col-span-1 xl:col-span-2 flex flex-col justify-between">
                <div>
                    <h4 className="text-2xl text-gray-800 mb-4 font-bold">{estate_title}</h4>
                    <p className="text-base font-medium text-gray-800 mb-2">{status}</p>
                    <ul className="mb-3 font-bold">
                        {
                            facilities.map((facility, index) => <li className="list-inside list-disc" key={index}>{facility}</li>)
                        }
                    </ul>
                    <p className="text-sm font-medium text-gray-800 mb-2">{location}</p>
                    <p className="text-base font-medium text-gray-800 mb-2">{short_description}</p>
                    <p className="text-lg font-medium text-gray-800 mb-3">{price}</p>
                </div>
                <button className="btn text-lg shadow-lg font-bold"><Link to={`/estateDetails/${id}`}>{button_text}</Link></button>
            </div>
        </div>
    );
};

Estate.propTypes = {
    estateData: PropTypes.object,
}

export default Estate;