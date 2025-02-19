import { GrUserExpert } from 'react-icons/gr';
import { education } from './assets/assets';
import { MdOutlineAccessTime } from 'react-icons/md';
import { FaBookReader } from 'react-icons/fa';
import { FadeUp } from './Hero';
import { easeInOut, motion } from 'framer-motion';

const Banner = () => {
    return (
        <section>
            <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
                <div className="flex justify-center items-center">
                    <motion.img
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: easeInOut }}
                        src={education}
                        alt="Banner Image"
                        className="w-full max-w-[350px] md:max-w-[650px] object-cover drop-shadow"
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="text-center md:text-left">
                        <motion.h1
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="text-2xl md:text-4xl font-bold !leading-snug mb-4">
                            The World&apos;s Leading Online Learning Software
                            Platform
                        </motion.h1>
                    </div>
                    <div className="flex flex-col gap-4 ">
                        <motion.div
                            variants={FadeUp(0.2)}
                            initial="initial"
                            whileInView={'animate'}
                            transition={{ ease: easeInOut }}
                            className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-primary hover:text-white hover:shadow-xl transition cursor-pointer">
                            <FaBookReader className="text-2xl " />
                            <p className="text-lg">10,000+ Courses</p>
                        </motion.div>
                        <motion.div
                            variants={FadeUp(0.4)}
                            initial="initial"
                            whileInView={'animate'}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-primary hover:text-white hover:shadow-xl transition cursor-pointer">
                            <GrUserExpert className="text-2xl " />
                            <p className="text-lg">expert Instructions</p>
                        </motion.div>
                        <motion.div
                            variants={FadeUp(0.6)}
                            initial="initial"
                            whileInView={'animate'}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-primary hover:text-white hover:shadow-xl transition cursor-pointer">
                            <MdOutlineAccessTime className="text-2xl " />
                            <p className="text-lg">Lifetime Access</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
