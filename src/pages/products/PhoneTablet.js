import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Grid from '../../container/Grid/Grid';
import ProductCard from '../../components/ProductCard/ProductCard';
import Phone1 from '../../assets/product-images/PhoneTablet/generic-phone-1.jpg';
import Footer from '../../components/Footer/Footer';


function DesktopLaptop() {



    return (
        <>
            <Navbar />
            <Sidebar typeOne='Phone' typeTwo='Tablet' priceOne={250} priceTwo={500} priceThree={800} />
            <Grid>
                <ProductCard img={Phone1} name="Generic Phone #1" price={499.99} />
                <ProductCard img={Phone1} name="Generic Phone #1" price={499.99} />
                <ProductCard img={Phone1} name="Generic Phone #1" price={499.99} />
                <ProductCard img={Phone1} name="Generic Phone #1" price={499.99} />
                <ProductCard img={Phone1} name="Generic Phone #1" price={499.99} />
                <ProductCard img={Phone1} name="Generic Phone #1" price={499.99} />
                <ProductCard img={Phone1} name="Generic Phone #1" price={499.99} />
                <ProductCard img={Phone1} name="Generic Phone #1" price={499.99} />
                <ProductCard img={Phone1} name="Generic Phone #1" price={499.99} />
            </Grid>
            <Footer />
        </>
    );
}

export default DesktopLaptop;
