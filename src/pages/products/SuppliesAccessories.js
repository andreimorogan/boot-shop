import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Grid from '../../container/Grid/Grid';
import ProductCard from '../../components/ProductCard/ProductCard';
import Poster1 from '../../assets/product-images/SuppliesAccessories/generic-poster-1.jpg';
import Poster2 from '../../assets/product-images/SuppliesAccessories/generic-poster-2.jpg';
import Case1 from '../../assets/product-images/SuppliesAccessories/generic-case-1.jpg';
import Case2 from '../../assets/product-images/SuppliesAccessories/generic-case-2.jpg';
import Case3 from '../../assets/product-images/SuppliesAccessories/generic-case-3.jpg';
import Notebook1 from '../../assets/product-images/SuppliesAccessories/generic-notebook-1.jpg';
import Notebook2 from '../../assets/product-images/SuppliesAccessories/generic-notebook-2.jpg';
import Postcard1 from '../../assets/product-images/SuppliesAccessories/generic-postcard-1.jpg';
import Postcard2 from '../../assets/product-images/SuppliesAccessories/generic-postcard-2.jpg';
import Footer from '../../components/Footer/Footer';


function SuppliesAccessories() {
    return (
        <>
            <Navbar />
            <Sidebar typeOne='Accessories' typeTwo='Office Supplies' priceOne={10} priceTwo={50} priceThree={100} />
            <Grid>
                <ProductCard img={Poster1} name="Generic Poster #1" price={12.99} />
                <ProductCard img={Poster2} name="Generic Poster #2" price={25.99} />
                <ProductCard img={Case1} name="Generic Case #1" price={9.99} />
                <ProductCard img={Case2} name="Generic Case #2" price={8.99} />
                <ProductCard img={Case3} name="Generic Case #3" price={14.99} />
                <ProductCard img={Notebook1} name="Generic Notebook #1" price={3.99} />
                <ProductCard img={Notebook2} name="Generic Notebook #2" price={5.99} />
                <ProductCard img={Postcard1} name="Generic Postcard #1" price={2.99} />
                <ProductCard img={Postcard2} name="Generic Postcard #2" price={1.99} />
            </Grid>
            <Footer />
        </>
    );
}

export default SuppliesAccessories;
