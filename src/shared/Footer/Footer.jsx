import { IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from "react-icons/io5";
const Footer = () => {
    return (
        <div className="bg-[#131313] mt-8 py-8 md:py-12">
            <footer className="footer p-6  text-white max-w-7xl mx-auto pb-6">
                <nav>
                    <h6 className="footer-title">Customer Care</h6>
                    <a className="link link-hover">Contact Us</a>
                    <a className="link link-hover">Home Owners</a>
                    <a className="link link-hover">Our Warranty</a>
                    <a className="link link-hover">Our TownHomes</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Current Communities</h6>
                    <a className="link link-hover">Hunter Hill</a>
                    <a className="link link-hover">Tower Ranch</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Stay In Touch</h6>
                    <p className="text-base">SubsCribe To get Latest Updates!</p>
                    <button className="btn text-lg shadow-lg font-bold mt-3">Subscribe</button>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t text-white border-base-300 max-w-7xl mx-auto p-2">
                <aside className="items-center grid-flow-col">
                    <img src="https://i.ibb.co/JCNnVg9/logo.jpg" alt="website logo" className="h-12 w-12 rounded-full"/>
                    <div>
                        <p className="text-2xl font-bold">NestQuest Reality</p>
                        <p>Your Key to Quality Living</p>
                    </div>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4 text-2xl">
                        <a href="https://www.facebook.com/Arifulislam083/" target="_blank"><IoLogoFacebook /></a>
                        <a href="https://twitter.com/MDSOJIBHOS22770" target="_blank"><IoLogoTwitter /></a>
                        <a href="https://www.youtube.com/" target="_blank"><IoLogoYoutube /></a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;