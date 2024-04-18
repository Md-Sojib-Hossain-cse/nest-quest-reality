import PropTypes from "prop-types";
import Estate from "../Estate/Estate";
import { useState } from "react";

const Estates = ({ estateDatas }) => {
    const [showAll, setShowAll] = useState(false);
    const handleShowAll = () => {
        setShowAll(!showAll);
    }
    return (
        <div className="my-12">
            <h3 className="text-3xl text-gray-800 font-semibold text-center">Explore Homes</h3>
            <div className="mt-8 grid lg:grid-cols-2 gap-6">
                {
                    showAll ?
                        estateDatas.map(estateData => <Estate key={estateData.id} estateData={estateData}></Estate>) :
                        estateDatas.slice(0,6).map(estateData => <Estate key={estateData.id} estateData={estateData}></Estate>)
                }
            </div>
            <div className="flex justify-center mt-6">
                <button onClick={handleShowAll} className="btn text-lg shadow-lg font-bold">{showAll ? "Show Less" : "Show More"}</button>
            </div>
        </div>
    );
};

Estates.propTypes = {
    estateDatas: PropTypes.array,
}

export default Estates;