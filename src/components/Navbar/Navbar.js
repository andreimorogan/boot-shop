import { Link } from 'react-router-dom';
import Logo from '../../assets/boot-shop.svg';

const Navbar = () => {
    return(
        <>
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item"><Link to="/" className="nav-link link-dark px-2 active">Home</Link></li>
                        <li className="nav-item"><Link to="/contact" className="nav-link link-dark px-2">Contact</Link></li>
                        <li className="nav-item"><Link to="/deals" className="nav-link link-dark px-2">Deals</Link></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle link-dark" data-bs-toggle="dropdown" role="button" aria-expanded="false">Products</a>
                            <ul className="dropdown-menu">
                                <li><Link to="/desktop-laptop" className="dropdown-item">Desktops, Laptops</Link></li>
                                <li><Link to="/phone-tablet" className="dropdown-item">Phones, Tablets</Link></li>
                                <li><Link to="/supplies-accessories" className="dropdown-item">Office supplies, Accesories</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className="nav-item"><Link to="/cart" className="nav-link link-dark px-2">Cart</Link></li>
                        <li className="nav-item"><Link to="/signin" className="nav-link link-dark px-2">Account</Link></li>
                    </ul>
                </div>
            </nav>
            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <Link to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        <img src={Logo} className="bi me-2" width="50" height="50" style={{position: 'relative', bottom: '0.3rem'}} />
                        <span className="fs-4">Boot Shop</span>
                    </Link>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                    </form>
                </div>
            </header>
        </>
    );
};

export default Navbar;