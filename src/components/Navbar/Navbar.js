import Logo from '../../assets/boot-shop.svg';

const Navbar = () => {
    return(
        <>
            <nav className="py-2 bg-light border-bottom">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2 active" aria-current="page">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Contact</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Deals</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Products</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Desktops, Laptops</a></li>
                                <li><a className="dropdown-item" href="#">Phones, Tablets</a></li>
                                <li><a className="dropdown-item" href="#">Office supplies</a></li>
                                <li><a className="dropdown-item" href="#">Accesories</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Cart</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Account</a></li>
                    </ul>
                </div>
            </nav>
            <header className="py-3 mb-4 border-bottom">
                <div className="container d-flex flex-wrap justify-content-center">
                    <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
                        <img src={Logo} className="bi me-2" width="50" height="50" style={{position: 'relative', bottom: '0.3rem'}} />
                        <span className="fs-4">Boot Shop</span>
                    </a>
                    <form className="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
                        <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
                    </form>
                </div>
            </header>
        </>
    );
};

export default Navbar;