import { logo, menuLinks } from './assets/assets.js';
import { MdMenuOpen } from 'react-icons/md';

const Navbar = () => {
    return (
        <nav>
            <div className="container py-4 md:py-10 flex justify-between items-center">
                {/* logo */}
                <div>
                    <img src={logo} alt="Logo" className="w-20" />
                </div>
                {/* menu */}
                <div className="hidden md:block">
                    <ul className="flex gap-1 lg:gap-4 items-center">
                        {menuLinks.map(({ id, title, url }) => (
                            <li key={id} className="hover:shadow-lg rounded-lg">
                                <a
                                    href={url}
                                    className="text-dark font-semibold inline-block py-2 px-3 hover:text-secondary relative group">
                                    <div className="w-2 h-2 bg-secondary absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-hover:block hidden "></div>
                                    {title}
                                </a>
                            </li>
                        ))}
                        <button className="primary-btn hidden lg:block">
                            Get In Touch
                        </button>
                    </ul>
                </div>
                {/* mobile menu */}
                <div className="md:hidden">
                    <button className="text-3xl sm:text-4xl">
                        <MdMenuOpen />
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
