import { logo, menuLinks } from './assets/assets.js';
import { MdMenuOpen } from 'react-icons/md';

const Navbar = () => {
    return (
        <nav>
            <div className="container py-10">
                {/* logo */}
                <div>
                    <img src={logo} alt="Logo" className="w-20" />
                </div>
                {/* menu */}
                <div className="hidden lg:block">
                    <ul>
                        {menuLinks.map(({ id, title, url }) => (
                            <li key={id} className="inline-block ml-5">
                                <a href={url} className="text-gray-600">
                                    {title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                {/* mobile menu */}
            </div>
        </nav>
    );
};

export default Navbar;
