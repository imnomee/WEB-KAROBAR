import Banner from './Banner.jsx';
import Hero from './Hero.jsx';
import Navbar from './Navbar.jsx';
import Services from './Services.jsx';
const App = () => {
    return (
        <main className="overflow-x-hidden bg-white text-dark">
            <Navbar />;
            <Hero />;
            <Services />
            <Banner />
        </main>
    );
};

export default App;
