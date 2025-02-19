import Hero from './Hero.jsx';
import Navbar from './Navbar.jsx';
import Services from './Services.jsx';
const App = () => {
    return (
        <main className="overflow-x-hidden bg-white text-dark">
            <Navbar />;
            <Hero />;
            <Services />
        </main>
    );
};

export default App;
