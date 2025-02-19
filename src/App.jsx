import Hero from './Hero.jsx';
import Navbar from './Navbar.jsx';
const App = () => {
    return (
        <main className="overflow-x-hidden bg-white text-dark">
            <Navbar />;
            <Hero />;
        </main>
    );
};

export default App;
