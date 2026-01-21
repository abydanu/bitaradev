'use client';

import { motion } from 'framer-motion'
import { Computer, ThumbUp, WorkHistory } from '@mui/icons-material';
import Counter from '@/app/utils/counter';

const StatisticSection = () => {
    return (
        <section className="relative z-10 mt-12">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    className="bg-white rounded-2xl shadow-lg py-8 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mx-auto text-center md:text-left">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-blue-50 rounded-full">
                            <Computer className="text-bitara-primary" fontSize="small" />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-bitara-primary">
                                <Counter to={10} />+
                            </h3>
                            <p className="text-gray-600 text-sm">Proyek Selesai</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mx-auto text-center md:text-left">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-blue-50 rounded-full">
                            <ThumbUp className="text-bitara-primary" fontSize="small" />
                        </div>
                        <div>
                            <h3 className="text-xl md:text-2xl font-bold text-bitara-primary">
                                <Counter to={98} />%
                            </h3>
                            <p className="text-gray-600 text-sm">Kepuasan Klien</p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mx-auto text-center md:text-left">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-blue-50 rounded-full">
                            <WorkHistory className="text-bitara-primary" fontSize="small" />
                        </div>
                        <div className="flex flex-col justify-center md:justify-start">
                            <h3 className="text-xl md:text-2xl font-bold text-bitara-primary leading-none">
                                <Counter to={1.5} decimals={1} />
                            </h3>
                            <p className="text-gray-600 text-sm">Tahun Pengalaman</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default StatisticSection
