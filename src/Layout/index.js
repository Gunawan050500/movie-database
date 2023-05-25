import Footer from "../component/Footer/Footer";
import Navbar from "../component/Navbar/Navbar";
import Container from "../component/Container/Container";

function Layout(props) {
    return(
        <>
        <Navbar />
        <main>
            <Container>
            {props.children}
            </Container>
        </main>
        <Footer />
        </>
    );
}

export default Layout;