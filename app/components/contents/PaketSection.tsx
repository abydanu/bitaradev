import { Check, CreditCard } from "@mui/icons-material"
import { paketHarga } from "@/app/data/paketHarga"
import { motion } from "framer-motion"

const PaketSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.9,
            rotateX: -15
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15,
                duration: 0.6
            }
        } as const
    }

    const featureVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: index * 0.1, 
                duration: 0.4
            }
        })
    }

    return (
        <section className="py-20 px-4 z-10 mt-40 scroll-mt-9" id="harga">
            <div className="max-w-7xl md:max-w-9/12 mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}>
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
                        <CreditCard className="w-2 md:w-4 h-2 md:h-4" />
                        <span className='text-[12px] md:text-base text-bitara-5'>Harga Paket Kami</span>
                    </motion.div>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-4 mb-4">
                        Solusi Digital untuk Setiap Kebutuhan
                    </h2>
                    <p className="md:text-xl text-gray-600 max-w-3xl mx-auto">
                        Pilih paket yang sesuai dengan kebutuhan dan anggaran bisnis Anda untuk meningkatkan
                        kehadiran digital Anda dengan hasil terbaik.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-10 mx-auto max-w-10/12 md:max-w-7xl"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    style={{ perspective: 1000 }}
                >
                    {paketHarga.map((paket, index) => (
                        <motion.div
                            key={paket.nama}
                            variants={cardVariants}
                            className='group relative bg-white rounded-3xl p-8 border border-gray-200 shadow-lg'
                        >
                            <motion.div className="mb-6">
                                <div
                                    className='w-16 h-16 rounded-2xl flex items-center justify-center bg-bitara-primary/10 text-bitara-5'
                                >
                                    {index === 0 && (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    )}
                                    {index === 1 && (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                    )}
                                    {index === 2 && (
                                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    )}
                                </div>
                            </motion.div>

                            <motion.div
                                className="mb-6"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{paket.nama}</h3>
                                <div className="flex items-baseline gap-2 mb-2">
                                    <span className='md:text-4xl text-2xl font-bold text-gray-900'>
                                        {paket.harga}
                                    </span>
                                    <span className="text-gray-600">{paket.periode}</span>
                                </div>
                                <p className="text-gray-600">{paket.deskripsi}</p>
                            </motion.div>

                            <div className="mb-8">
                                <ul className="space-y-4">
                                    {paket.fitur.map((fitur, fiturIndex) => (
                                        <motion.li
                                            key={fiturIndex}
                                            className="flex items-start gap-3"
                                            custom={fiturIndex}
                                            variants={featureVariants}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                        >
                                            <motion.div
                                                className='w-5 h-5 rounded-full flex items-center justify-center mt-0.5 bg-green-100 text-green-600'
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{
                                                    delay: 0.4 + (fiturIndex * 0.1),
                                                    type: "spring",
                                                    stiffness: 200
                                                }}
                                                viewport={{ once: true }}
                                            >
                                                <Check className="w-3 h-3" />
                                            </motion.div>
                                            <span className="text-gray-700 text-sm leading-relaxed">{fitur}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <motion.button
                                className='relative overflow-hidden w-full py-4 px-6 rounded-xl font-semibold transition-all duration-500 group/btn shadow-md bg-linear-to-r from-bitara-primary via-bitara-primary to-bitara-dark text-white'
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <div className="absolute inset-0 -left-full group-hover/btn:left-full transition-all duration-700 bg-white/20 skew-x-12"></div>
                                <a className="relative inline-flex items-center justify-center overflow-hidden group/btn hover:cursor-pointer" href="https://wa.me/6283136863620" target="_blank" rel="noopener noreferrer">
                                    <span className="relative z-10">{paket.textTombol}</span>
                                </a>
                            </motion.button>

                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default PaketSection