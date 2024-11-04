

const Footer = () => {
    return (
        <div>
            <div className="text-center align-middle p-8 space-y-3">
                <h1 className="font-bold text-2xl">Gadget Heaven</h1>
                <p className="text-sm">Leading the way in the cutting-edge technology and innovation.</p>
            </div>
            <hr />
            <footer className="grid grid-cols-1 md:grid-cols-3 bg-white  p-10">
                <div className=" text-center align-middle space-y-3 mb-3">
                    <h6 className="footer-title">Services</h6>
                    <ul className="text-sm">
                        <li><a className="link link-hover">Branding</a></li>
                        <li><a className="link link-hover">Older Tracking</a></li>
                        <li> <a className="link link-hover">Shipping & Delivery</a></li>
                        <li> <a className="link link-hover">Returns</a></li>

                    </ul>
                </div >
                <nav className=" text-center align-middle space-y-3 mb-3">
                    <h6 className="footer-title">Company</h6>
                    <ul className="text-sm">
                        <li><a className="link link-hover">About us</a></li>
                        <li><a className="link link-hover">Careers</a></li>
                        <li> <a className="link link-hover">Contact</a></li>

                    </ul>
                    
                </nav>
                <nav className=" text-center align-middle space-y-3 mb-3">
                    <h6 className="footer-title">Legal</h6>
                    <ul className="text-sm">
                        <li><a className="link link-hover">Terms of use</a></li>
                        <li><a className="link link-hover">Privacy policy</a></li>
                        <li> <a className="link link-hover">Shipping & Delivery</a></li>
                        <li> <a className="link link-hover">Cookie policy</a></li>

                    </ul>
                    
                </nav>
            </footer>
        </div>
    );
};

export default Footer;