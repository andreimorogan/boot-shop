import './Carousel.css';
import Sale from '../../assets/sale.jpg';
import Headphone from '../../assets/headphone.jpg';
import Phone from '../../assets/phone.jpg';

const Carousel = () => {
    return (
        <div className="container">
            <div id="carouselExample" className="carousel slide w-100">
                <div className="carousel-inner">
                    <div className="carousel-item active c-item">
                        <img src={Sale} className="d-block w-100 c-img" alt="Special promotion carousel photo" />
                    </div>
                    <div className="carousel-item c-item">
                        <img src={Headphone} className="d-block w-100 c-img" alt="Headphone carousel photo"  />
                    </div>
                    <div className="carousel-item c-item">
                        <img src={Phone} className="d-block w-100 c-img" alt="Care products carousel photo" style={{objectPosition: '35% 35%'}} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;