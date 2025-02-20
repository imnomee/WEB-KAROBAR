import { motion } from 'framer-motion';
import { FaBell } from 'react-icons/fa6';
import { subscribe } from './assets/assets';

const bgStyle = {
    backgroundImage: `url(${subscribe})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
};
const Subscribe = () => {
    return (
        <section className="bg-[#f7f7f7]">
            <div style={bgStyle} className="container p-14 md:py-56 w-full">
                <div className="flex flex-col justify-end">
                    <div className="text-center max-w-[350px] lg:max-w-[630px] mx-auto flex flex-col gap-8">
                        <h1 className="text-2xl md:text-4xl font-bold">
                            Stay Ahead with the Latest Insights!
                        </h1>
                        <p className="text-lg :md:text-xl leading-relaxed tracking-wide">
                            Subscribe to our newsletter and be the first to know
                            about industry trends, new services, and exclusive
                            offers.
                            <br />
                            We promise no spam—just valuable content to help
                            your business thrive!
                        </p>
                        <a
                            href=""
                            className="primary-btn inline-flex items-center gap-4 mx-auto text-xl p-4">
                            Subscribe Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Subscribe;
