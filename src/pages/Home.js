import Navbar from '../components/Navbar/Navbar';
import Carousel from '../components/Carousel/Carousel';
import Divider from '../components/Divider/Divider';
import Grid from '../container/Grid/Grid';
import ProductCard from '../components/ProductCard/ProductCard';
import Laptop1 from '../assets/product-images/DesktopLaptop/generic-laptop-1.jpg';
import Desktop1 from '../assets/product-images/DesktopLaptop/generic-desktop-1.jpg';
import Phone1 from '../assets/product-images/PhoneTablet/generic-phone-1.jpg';
import Tablet1 from '../assets/product-images/PhoneTablet/generic-tablet-1.jpg'
import Poster1 from '../assets/product-images/SuppliesAccessories/generic-poster-1.jpg';
import Case1 from '../assets/product-images/SuppliesAccessories/generic-case-1.jpg';
import Footer from '../components/Footer/Footer';

function Home() {
    return (
        <>
            <Navbar />
            <Carousel />
            <Divider top='3rem' bottom='1.5rem' />
            <Grid>
                <ProductCard img={Laptop1} name="Generic Laptop #1" price={1199.99} />
                <ProductCard img={Desktop1} name="Generic Desktop #1" price={1999.99} />
                <ProductCard img={Phone1} name="Generic Phone #1" price={499.99} />
                <ProductCard img={Tablet1} name="Generic Tablet #1" price={699.99} />
                <ProductCard img={Poster1} name="Generic Poster #1" price={12.99} />
                <ProductCard img={Case1} name="Generic Case #1" price={9.99} />
            </Grid>
            <Footer />
        </>
    );
}

export default Home;
