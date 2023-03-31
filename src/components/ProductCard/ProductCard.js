import { Link } from "react-router-dom";
import './ProductCard.css';
// Placeholder price for now, it needs to be stored on the back-end.

const ProductCard = (props) => {

    const {img, name, price} = props;
    
    return (
            <div className="col">
                <div className="card shadow-sm h-100">
                <Link to="/bootshop"><img src={img} className="card-img-top c-product-img" alt="Generic laptop"></img></Link>
                <div className="card-body">
                        <p className="card-text" >{name}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Add to cart</button>
                            </div>
                            <small className="text-body-secondary">{price} USD</small>
                        </div>
                    </div>
                </div>
            </div>
);
};

export default ProductCard;