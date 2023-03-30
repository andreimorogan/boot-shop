import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = (props) => {

    const { typeOne, typeTwo, priceOne, priceTwo, priceThree} = props;
    const [toggle, setToggle] = useState('hidden');

    const handleClick = () => {
        toggle ? setToggle('') : setToggle('hidden');
    }
    
    return (
        <>
            <div className="container">
                <button type="button" className="btn btn-secondary" onClick={handleClick}>Filters</button>
            </div>
            <div className={`flex-shrink-0 p-3 mt-3 bg-secondary c-filter-container ${toggle}`}>
                <div href="/" className="d-flex align-items-center pb-3 mb-3 link-body-emphasis text-decoration-none border-bottom">
                    <span className="fs-5 fw-semibold text-black">Filters</span>
                </div>
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed text-black" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
                            Product Type
                        </button>
                        <div className="collapse show" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            {typeOne}
                                        </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        {typeTwo}
                                    </label>
                                </div>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed text-black" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="true">
                            Price Range
                        </button>
                        <div className="collapse show" id="dashboard-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        {`Under ${priceOne} USD`}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        {`Under ${priceTwo} USD`}
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        {`Under ${priceThree} USD`}
                                    </label>
                                </div>
                            </ul>
                        </div>
                    </li>
                    <li className="mb-1">
                        <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed text-black" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="true">
                            Availability
                        </button>
                        <div className="collapse show" id="orders-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Available
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Out of stock
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label" htmlFor="flexCheckDefault">
                                        Available at supplier
                                    </label>
                                </div>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </>

    );
};

export default Sidebar;