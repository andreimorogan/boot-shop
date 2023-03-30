import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Grid from '../../container/Grid/Grid';
import ProductCard from '../../components/ProductCard/ProductCard';
import Laptop1 from '../../assets/product-images/DesktopLaptop/generic-laptop-1.jpg';
import Desktop1 from '../../assets/product-images/DesktopLaptop/generic-desktop-1.jpg';
import Footer from '../../components/Footer/Footer';


function DesktopLaptop() {



    return (
        <>
            <Navbar />
            <Sidebar typeOne='Desktop' typeTwo='Laptop' priceOne={300} priceTwo={500} priceThree={1000}  />
            <Grid>
                <ProductCard img={Laptop1} name="Generic Laptop #1" price={1199.99} />
                <ProductCard img={Laptop1} name="Generic Laptop #1" price={1199.99} />
                <ProductCard img={Laptop1} name="Generic Laptop #1" price={1199.99} />
                <ProductCard img={Desktop1} name="Generic Desktop #1" price={1999.99} />
                <ProductCard img={Desktop1} name="Generic Desktop #1" price={1999.99} />
                <ProductCard img={Desktop1} name="Generic Desktop #1" price={1999.99} />
                <ProductCard img={Laptop1} name="Generic Laptop #1" price={1199.99} />
                <ProductCard img={Laptop1} name="Generic Laptop #1" price={1199.99} />
                <ProductCard img={Laptop1} name="Generic Laptop #1" price={1199.99} />
                <ProductCard img={Desktop1} name="Generic Desktop #1" price={1999.99} />
                <ProductCard img={Desktop1} name="Generic Desktop #1" price={1999.99} />
                <ProductCard img={Desktop1} name="Generic Desktop #1" price={1999.99} />
            </Grid>
            <Footer />
        </>
    );
}

export default DesktopLaptop;
