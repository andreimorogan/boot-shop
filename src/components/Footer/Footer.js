const Footer = () => {
    return (
        <>
            <div className="container mt-5">
                <footer className="py-3 my-4">
                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Contact</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Credits</a></li>
                        <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">About</a></li>
                    </ul>
                    <p className="text-center text-dark">&copy; 2023 Boot Shop (obviously not copyright registered)</p>
                </footer>
            </div>
        </>
    );
};

export default Footer;