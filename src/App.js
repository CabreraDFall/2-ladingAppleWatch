import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Icons from "./components/Icons";
import Oferts from "./components/Oferts";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="App px-[2rem] md:px-[5rem] pt-[3.7rem] pb-1 text-left">
      <Header />
      <Hero />
      <Icons />
      <ProductList />
      <Oferts />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
