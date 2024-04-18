import 'animate.css';

const Slider = () => {
    return (
        <div className="mt-8">
            <div className="carousel w-full">
                <div id="item1" className="relative carousel-item w-full h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
                    <img src="https://i.ibb.co/QFL7HzK/singlehomebanner.jpg" className="w-full h-full" />
                    <div className="absolute top-auto bottom-4 md:bottom-auto md:top-1/3 right-6 md:right-10 lg:right-16 h-10/12 md:h-1/2 w-10/12 md:w-1/2 bg-[#13131344] rounded-lg flex justify-center items-center flex-col p-4 md:p-6 lg:p-8">
                        <div className="space-y-3">
                            <h4 className="text-2xl text-gray-200 font-semibold">Your Dream Home Awaits</h4>
                            <p className="text-lg font-medium text-gray-300">Discover the perfect blend of comfort and luxury with our exclusive selection of homes. Find your dream home today!</p>
                        </div>
                    </div>
                </div>
                <div id="item2" className="relative carousel-item w-full h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
                    <img src="https://i.ibb.co/KXSxdNz/banner2.jpg" className="w-full h-full" />
                    <div className="absolute top-auto bottom-4 md:bottom-auto md:top-1/3 right-6 md:right-10 lg:right-16 h-10/12 md:h-1/2 w-10/12 md:w-1/2 bg-[#13131344] rounded-lg flex justify-center items-center flex-col p-4 md:p-6 lg:p-8">
                        <div className="space-y-3">
                            <h4 className="text-2xl text-gray-200 font-semibold">Rustic Retreats</h4>
                            <p className="text-lg font-medium text-gray-300">Embrace the charm of rustic living with our collection of countryside retreats. Find your peaceful getaway today.</p>
                        </div>
                    </div>
                </div>
                <div id="item3" className="relative carousel-item w-full h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
                    <img src="https://i.ibb.co/XCHcM8B/banner3.jpg" className="w-full" />
                    <div className="absolute top-auto bottom-4 md:bottom-auto md:top-1/3 right-6 md:right-10 lg:right-16 h-10/12 md:h-1/2 w-10/12 md:w-1/2 bg-[#13131344] rounded-lg flex justify-center items-center flex-col p-4 md:p-6 lg:p-8">
                        <div className="space-y-3">
                            <h4 className="text-2xl text-gray-200 font-semibold">Urban Living Redefined</h4>
                            <p className="text-lg font-medium text-gray-300">Experience modern city living at its finest. Explore our urban properties and enjoy the convenience of downtown living</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Slider;