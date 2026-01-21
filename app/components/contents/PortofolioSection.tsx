import React, { useState } from 'react';
import { portofolioData } from '@/app/data/portofolioData';
import PortofolioCard from '../ui/PortofolioCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Work } from '@mui/icons-material';

const PortfolioSection: React.FC = () => {
    const [activeFilter, setActiveFilter] = useState<string>('Semua Proyek');

    const filters = [
        'Semua Proyek',
        'Company Profile',
        'Toko Online (E-Commerce)',
        'Other'
    ];

    const filteredItems = activeFilter === 'Semua Proyek'
        ? portofolioData
        : portofolioData.filter(item => item.category === activeFilter);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0,
            y: 30,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.5
            }
        } as const,
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.3
            }
        } as const
    };

    const filterVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.1,
                duration: 0.4
            }
        })
    };

    return (
        <div className="min-h-screen py-16 px-4 mt-20 scroll-mt-11" id='portofolio'>
            <div className="max-w-7xl md:max-w-10/12 mx-auto">
                <motion.div 
                    className="text-center mb-12" 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-flex items-center space-x-2 bg-blue-50 text-bitara-primary px-3 md:px-4 py-2 rounded-full text-sm font-medium will-change-transform"
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "mirror"
                        }}
                    >
                        <Work className="w-2 md:w-4 h-2 md:h-4" />
                        <span className='text-[12px] md:text-base text-bitara-5'>Portofolio Kami</span>
                    </motion.div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                        Proyek Premium yang Menginspirasi
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Lihat beberapa proyek terbaik kami yang menunjukkan keahlian dan kreativitas yang kami bawa ke setiap proyek klien.
                    </p>
                </motion.div>

                <motion.div 
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {filters.map((filter, index) => (
                        <motion.button
                            key={filter}
                            custom={index}
                            variants={filterVariants}
                            onClick={() => setActiveFilter(filter)}
                            className={`relative overflow-hidden text-[12px] md:text-base px-4 md:px-6 py-2 md:py-3 rounded-full font-medium hover:cursor-pointer transition-all duration-500 group/btn inline-flex items-center space-x-2 ${activeFilter === filter
                                ? 'bg-linear-to-r from-bitara-primary via-bitara-primary to-bitara-dark text-white shadow-lg shadow-bitara-primary/30'
                                : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                                }`}
                        >
                            <div className="absolute inset-0 -left-full group-hover/btn:left-full transition-all duration-700 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                            {filter}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div 
                    className="flex flex-wrap gap-8 justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div 
                                key={item.id}
                                variants={cardVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] min-w-[320px] max-w-[450px]"
                                layout
                            >
                                <PortofolioCard item={item} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default PortfolioSection;