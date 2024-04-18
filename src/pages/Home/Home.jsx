import { useLoaderData } from "react-router-dom";
import Estates from "../../components/Estates/Estates";
import Slider from "../../components/Slider/Slider";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const estateDatas = useLoaderData();
    return (
        <div>
            <Helmet>
                <title> NestQuest Reality | Home</title>
            </Helmet>
            <Slider></Slider>
            <Estates estateDatas={estateDatas}></Estates>
        </div>
    );
};

export default Home;