const Slider = () => {
    return (
        <div className="mt-24">
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
                    <img src="https://i.ibb.co/QFL7HzK/singlehomebanner.jpg" className="w-full h-full" />
                </div>
                <div id="item2" className="carousel-item w-full h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
                    <img src="https://i.ibb.co/KXSxdNz/banner2.jpg" className="w-full h-full" />
                </div>
                <div id="item3" className="carousel-item w-full h-[40vh] md:h-[60vh] lg:h-[70vh] xl:h-[80vh]">
                    <img src="https://i.ibb.co/XCHcM8B/banner3.jpg" className="w-full" />
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