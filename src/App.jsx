import Banner from './Banner.jsx';
import Hero from './Hero.jsx';
import Navbar from './Navbar.jsx';
import Services from './Services.jsx';
import Subscribe from './Subscribe.jsx';
const App = () => {
    return (
        <main className="overflow-x-hidden bg-white text-dark">
            <Navbar />;
            <Hero />;
            <Services />
            <Banner />
            <Subscribe />
        </main>
    );
};

export default App;
