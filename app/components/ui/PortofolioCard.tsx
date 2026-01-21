import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { PortfolioItem } from '@/app/data/portofolioData';

const PortofolioCard = ({ item }: { item: PortfolioItem }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="group relative rounded-3xl overflow-hidden shadow-xl cursor-pointer h-80 w-full max-w-7xl"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            transition={{ duration: 0.3 }}
        >
            <motion.div
                className="absolute inset-0"
                animate={isHovered ? { scale: 1.1, rotate: 2 } : { scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </motion.div>

            <motion.div
                className="absolute inset-0 bg-linear-to-br from-bitara-dark/45 via-bitara-secondary/25 to-bitara-primary/45 backdrop-blur-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.4 }}
            />

            <motion.div
                className="absolute inset-0 flex flex-col justify-between p-8"
                animate={{ opacity: isHovered ? 0 : 1 }}
                transition={{ duration: 0.3 }}
            >
            </motion.div>

            <motion.div
                className="absolute inset-0 flex flex-col justify-between p-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={isHovered ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                >
                    <span className="inline-block px-2 py-1 bg-bitara-primary/30 backdrop-blur-md rounded-full text-[12px] text-white font-bold border border-bitara-secondary/40">
                        {item.category}
                    </span>
                </motion.div>

                <div className="space-y-4">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.15 }}
                    >
                        <h3 className="text-xl md:text-2xl font-bold text-white leading-tight inline-block relative">
                            {item.title}
                            <motion.span
                                className="absolute left-0 -bottom-1 h-1 bg-white rounded-full"
                                initial={{ width: 0 }}
                                animate={isHovered ? { width: '100%' } : { width: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            />
                        </h3>
                    </motion.div>

                    <motion.p
                        className="text-white text-sm leading-relaxed line-clamp-3"
                        initial={{ y: 20, opacity: 0 }}
                        animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        {item.description}
                    </motion.p>

                    <motion.a
                        className="relative overflow-hidden bg-linear-to-r from-bitara-primary via-bitara-primary to-bitara-dark text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-500 group/btn shadow-md inline-flex items-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        href={item.link}
                        target='_blank'
                    >
                        <div className="absolute inset-0 -left-full group-hover/btn:left-full transition-all duration-700 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                        Lihat Detail
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default PortofolioCard;