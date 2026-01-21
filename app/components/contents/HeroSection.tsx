'use client';

import CodeIcon from '@mui/icons-material/Code';
import { motion } from 'framer-motion'

const HeroSection = () => {
    return (
        <section className="max-w-7xl md:max-w-9/12 mx-auto px-6 py-16 md:py-24 scroll-mt-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    className="relative z-10 space-y-6"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <div className="flex justify-center md:justify-start">
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
                            <CodeIcon className="w-2 md:w-4 h-2 md:h-4" />
                            <span className='text-[12px] md:text-base text-bitara-5'>Website Profesional & Cepat</span>
                        </motion.div>
                    </div>


                    <h1 className="text-4xl text-black md:text-5xl font-bold text-center md:text-left leading-tight max-w-xl">
                        Wujudkan Impian Digitalmu Lewat {' '}
                        <span className="bg-linear-to-r from-bitara-primary via-bitara-primary to-bitara-dark bg-clip-text text-transparent">
                            Website{' '}
                        </span>
                        yang Terjangkau dan Profesional
                    </h1>

                    <p className="text-[15px] md:text-lg text-center md:text-left text-gray-600 leading-relaxed max-w-xl">
                        Kami bantu siapa pun — dari anak muda hingga orang tua — punya website profesional dan mudah digunakan. Dengan harga ramah dan proses cepat, kami wujudkan website dan aplikasi yang berkualitas agar bisnismu tampil percaya diri di dunia digital.
                    </p>



                    <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
                        <a
                            href="https://wa.me/6283136863620"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative overflow-hidden bg-linear-to-r from-bitara-primary via-bitara-primary to-bitara-dark text-white px-4 md:px-8 py-2 md:py-3 rounded-lg font-semibold shadow-xl transition-all duration-500 group/btn inline-flex items-center space-x-2"
                        >
                            <div className="absolute inset-0 -left-full group-hover/btn:left-full transition-all duration-700 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                            <span className="relative z-10">Pesan Sekarang</span>
                        </a>

                        <a
                            href="#portofolio"
                            className="relative overflow-hidden bg-white text-gray-900 px-4 md:px-8 py-2 md:py-3 rounded-lg font-semibold border-2 border-gray-200 hover:text-white hover:shadow-xl transition-all duration-500 group/btn inline-flex items-center"
                        >
                            <div className="absolute inset-0 bg-linear-to-r from-bitara-primary via-bitara-primary to-bitara-dark opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>

                            <div className="absolute inset-0 -left-full group-hover/btn:left-full transition-all duration-700 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>

                            <span className="relative z-10">Lihat Proyek</span>
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    className="relative z-0"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: 0.15 }}
                >
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transform transition-transform duration-300">
                        <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b border-gray-200">
                            <div className="flex space-x-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                            <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 ml-4">
                                bitaradev.com
                            </div>
                        </div>

                        <div className="p-8 bg-linear-to-br from-blue-50 to-purple-50">
                            <div className="flex items-center space-x-3 mb-6">
                            </div>

                            <div className="space-y-3 mb-6">
                                <div className="h-4 bg-gray-200 rounded w-40"></div>
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            </div>

                            <div className="grid grid-cols-1 gap-4 mb-6">
                                <div className="h-24 bg-linear-to-br from-bitara-primary to-bitara-secondary opacity-40 rounded-lg"></div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-6">
                                <div className="h-24 bg-linear-to-br from-blue-200 to-cyan-300 opacity-40 rounded-lg"></div>
                                <div className="h-24 bg-linear-to-br from-blue-400 to-purple-200 opacity-40 rounded-lg"></div>
                            </div>
                        </div>
                    </div>

                    <div className="pointer-events-none absolute -z-10 -top-4 -right-4 w-24 h-24 bg-linear-to-br from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-30"></div>
                    <div className="pointer-events-none absolute -z-10 -bottom-4 -left-4 w-32 h-32 bg-linear-to-br from-cyan-400 to-blue-400 rounded-full blur-2xl opacity-30"></div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection;
