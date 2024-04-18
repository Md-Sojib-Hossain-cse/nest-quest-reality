import { useLoaderData } from "react-router-dom";
import Estates from "../../components/Estates/Estates";
import Slider from "../../components/Slider/Slider";

const Home = () => {
    const estateDatas = useLoaderData();
    return (
        <div>
            <Slider></Slider>
            <Estates estateDatas={estateDatas}></Estates>
        </div>
    );
};

export default Home;