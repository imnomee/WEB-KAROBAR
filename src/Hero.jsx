import { FaArrowRightLong } from 'react-icons/fa6';
import { banner } from './assets/assets';
import { easeInOut, motion } from 'framer-motion';

export const FadeUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                duration: 0.5,
                delay: delay,
                ease: 'easeInOut',
            },
        },
    };
};
const Hero = () => {
    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        variants={FadeUp(0.4)}
                        initial="initial"
                        animate="animate"
                        className="flex flex-col justify-center items-center relative z-10 order-2 md:order-1">
                        <div className="text-center md:text-left space-y-4 lg:max-w-[500px]">
                            <h1 className="text-2xl lg:text-4xl font-bold">
                                <span className="text-primary">Web</span>
                                <span className="text-secondary inline-block lg:pb-2">
                                    Karobar:
                                </span>
                                <br />
                                Your Secret Weapon to Win the Web!
                            </h1>
                            <p className="text-dark text-lg lg:text-2xl md:leading-8 lg:leading-relaxed">
                                Crafting websites and web apps with purpose and
                                precision, delivering clean designs, innovative
                                solutions, and exceptional user experiences to
                                help your business shine online.
                            </p>
                            <motion.button
                                variants={FadeUp(0.6)}
                                animate="animate"
                                initial="initial"
                                className="primary-btn flex items-center gap-2 group mx-auto md:mx-0 py-4">
                                Get In Touch
                                <FaArrowRightLong className="group-hover:translate-x-2 group-hover:-rotate-45 transition-all" />
                            </motion.button>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.5,
                            ease: easeInOut,
                        }}
                        className="order-1 md:order-2">
                        <img
                            src={banner}
                            alt="Hero"
                            className="rounded-lg scale-x-[-1] w-full mx-auto"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
