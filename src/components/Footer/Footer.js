import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="container mt-5">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><Link to="/bootshop" href="#" className="nav-link px-2 text-dark">Home</Link></li>
                        <li className="nav-item"><Link to="/bootshop/contact" href="#" className="nav-link px-2 text-dark">Contact</Link></li>
                        <li className="nav-item"><Link to="/bootshop/credits" href="#" className="nav-link px-2 text-dark">Credits</Link></li>
                    </ul>
                    <p className="text-center text-dark">&copy; 2023 Boot Shop (obviously not copyright registered)</p>
                </footer>
            </div>
        </>
    );
};

export default Footer;