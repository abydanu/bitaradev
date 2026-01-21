import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Rule } from '@mui/icons-material';

interface ProcessStep {
    id: number;
    title: string;
    description: string;
    features: string[];
    position: 'left' | 'right';
}

interface FinalStep {
    id: number;
    title: string;
    description: string;
}

const ProcessSection: React.FC = () => {
    const processSteps: ProcessStep[] = [
        {
            id: 1,
            title: 'Penemuan & Perencanaan',
            description: 'Kami mulai dengan memahami tujuan bisnis, target audiens, dan kebutuhan proyek Anda. Tim kami akan membuat rencana proyek dan timeline yang detail.',
            features: [
                'Konsultasi mendetail tentang kebutuhan proyek',
                'Analisa kompetitor & target pasar',
                'Penetapan timeline & milestone proyek'
            ],
            position: 'left'
        },
        {
            id: 2,
            title: 'Desain & Prototyping',
            description: 'Tim desain kami membuat wireframe dan desain visual untuk persetujuan Anda. Kami akan melakukan iterasi hingga mencapai tampilan dan nuansa yang sempurna untuk proyek Anda.',
            features: [
                'Wireframing & perancangan UI/UX',
                'Pembuatan mockup visual interaktif',
                'Revisi & approval desain final'
            ],
            position: 'right'
        },
        {
            id: 3,
            title: 'Pengembangan',
            description: 'Tim pengembangan kami menghidupkan desain dengan menulis kode yang bersih dan efisien serta mengimplementasikan semua fungsionalitas yang diperlukan untuk proyek Anda.',
            features: [
                'Pengembangan frontend responsive',
                'Implementasi backend & database',
                'Integrasi API & layanan pihak ketiga'
            ],
            position: 'left'
        },
        {
            id: 4,
            title: 'Pengujian & QA',
            description: 'Kami menguji proyek Anda secara menyeluruh di berbagai perangkat dan browser untuk memastikan semuanya berfungsi dengan sempurna dan memenuhi standar kualitas kami.',
            features: [
                'Pengujian pada semua browser utama',
                'Pengujian responsif di berbagai perangkat',
                'Pengujian performa & keamanan'
            ],
            position: 'right'
        }
    ];

    const finalSteps: FinalStep[] = [
        {
            id: 5,
            title: 'Peluncuran',
            description: 'Setelah semuanya disetujui, kami menerapkan proyek Anda ke lingkungan live, memastikan transisi yang lancar dan konfigurasi yang tepat.',
        },
        {
            id: 6,
            title: 'Dukungan & Pemeliharaan',
            description: 'Kami menyediakan dukungan dan pemeliharaan berkelanjutan untuk memastikan proyek Anda terus berkinerja optimal dan tetap up-to-date.',
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const stepVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    const badgeVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            } as const
        }
    };

    return (
        <div className="min-h-screen py-16 px-4 mt-20 scroll-mt-11" id='alur-kerja'>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
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
                        <Rule className="w-2 md:w-4 h-2 md:h-4" />
                        <span className='text-[12px] md:text-base text-bitara-5'>Alur Kerja Kami</span>
                    </motion.div>
                    <h1 className="text-3xl md:text-2xl font-bold text-gray-900 mt-4 mb-4">
                        Proses Pengembangan Kami
                    </h1>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Kami mengikuti pendekatan terstruktur dan transparan untuk memberikan hasil berkualitas tinggi di setiap proyek.
                    </p>
                </motion.div>

                <motion.div
                    className="relative"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-bitara-primary via-bitara-primary to-transparent hidden lg:block"></div>

                    {processSteps.map((step) => (
                        <motion.div
                            key={step.id}
                            className="relative mb-12 lg:mb-20"
                            variants={stepVariants}
                        >
                            <div className="lg:hidden">
                                <div className="flex items-start gap-4">
                                    <motion.div
                                        className="shrink-0 w-12 h-12 bg-bitara-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg"
                                        variants={badgeVariants}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {step.id}
                                    </motion.div>

                                    <div className="flex-1">
                                        <motion.div
                                            className="bg-white rounded-2xl shadow-lg p-6 mb-4"
                                            variants={cardVariants}
                                        >
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                {step.id}. {step.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                                {step.description}
                                            </p>
                                        </motion.div>

                                        <motion.div
                                            className=" rounded-2xl p-5"
                                            variants={cardVariants}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <ul className="space-y-2">
                                                {step.features.map((feature, idx) => (
                                                    <motion.li
                                                        key={idx}
                                                        className="flex items-start gap-2"
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: idx * 0.1 }}
                                                    >
                                                        <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                                        <span className="text-gray-700 text-sm">{feature}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-8 lg:items-start">
                                {step.position === 'left' ? (
                                    <>
                                        <motion.div
                                            className="text-right"
                                            variants={cardVariants}
                                            custom={step.position}
                                            initial={{ opacity: 0, x: -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        >
                                            <motion.div
                                                className="bg-white rounded-2xl shadow-lg p-6 inline-block max-w-md"
                                                transition={{ duration: 0.3 }}
                                            >
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                    {step.id}. {step.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </motion.div>
                                        </motion.div>

                                        <motion.div
                                            className="flex items-center justify-center"
                                            variants={badgeVariants}
                                        >
                                            <motion.div
                                                className="w-16 h-16 bg-bitara-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-xl z-10"
                                                transition={{ duration: 0.5, type: "spring" }}
                                            >
                                                {step.id}
                                            </motion.div>
                                        </motion.div>

                                        <motion.div
                                            variants={cardVariants}
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                        >
                                            <motion.div
                                                className="bg-blue-50 rounded-2xl p-6 max-w-md"
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ul className="space-y-3">
                                                    {step.features.map((feature, idx) => (
                                                        <motion.li
                                                            key={idx}
                                                            className="flex items-start gap-3"
                                                            initial={{ opacity: 0, x: 20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: 0.3 + idx * 0.1 }}
                                                        >
                                                            <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                                            <span className="text-gray-700 text-sm">{feature}</span>
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        </motion.div>
                                    </>
                                ) : (
                                    <>
                                        <motion.div
                                            className="text-right flex justify-end"
                                            variants={cardVariants}
                                            initial={{ opacity: 0, x: -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, ease: "easeOut" }}
                                        >
                                            <motion.div
                                                className="bg-blue-50 rounded-2xl p-6 max-w-md"
                                                transition={{ duration: 0.3 }}
                                            >
                                                <ul className="space-y-3">
                                                    {step.features.map((feature, idx) => (
                                                        <motion.li
                                                            key={idx}
                                                            className="flex items-start gap-3 justify-end text-right"
                                                            initial={{ opacity: 0, x: -20 }}
                                                            whileInView={{ opacity: 1, x: 0 }}
                                                            viewport={{ once: true }}
                                                            transition={{ delay: 0.3 + idx * 0.1 }}
                                                        >
                                                            <span className="text-gray-700 text-sm">{feature}</span>
                                                            <CheckCircle className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                                                        </motion.li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        </motion.div>

                                        <motion.div
                                            className="flex items-center justify-center"
                                            variants={badgeVariants}
                                        >
                                            <motion.div
                                                className="w-16 h-16 bg-bitara-primary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-xl z-10"
                                                transition={{ duration: 0.5, type: "spring" }}
                                            >
                                                {step.id}
                                            </motion.div>
                                        </motion.div>

                                        <motion.div
                                            variants={cardVariants}
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                        >
                                            <motion.div
                                                className="bg-white rounded-2xl shadow-lg p-6 max-w-md"
                                                transition={{ duration: 0.3 }}
                                            >
                                                <h3 className="text-xl font-bold text-gray-900 mb-2">
                                                    {step.id}. {step.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </motion.div>
                                        </motion.div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        className="grid md:grid-cols-2 gap-6 mt-16 relative"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {finalSteps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                className="relative pt-8"
                                variants={stepVariants}
                                custom={index}
                            >
                                <motion.div
                                    className="bg-white rounded-2xl shadow-lg px-4 py-6 text-center h-full flex flex-col items-center relative overflow-hidden"
                                    transition={{ duration: 0.3 }}
                                >
                                    <motion.div
                                        className="w-14 h-14 bg-bitara-primary text-white rounded-full flex items-center justify-center text-xl font-bold shadow-xl z-10"
                                        initial={{ scale: 0 }}
                                        whileInView={{ scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 15,
                                            delay: index * 0.2
                                        }}
                                    >
                                        {step.id}
                                    </motion.div>

                                    <motion.h3
                                        className="text-2xl font-bold text-gray-900 mb-3 mt-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + index * 0.2 }}
                                    >
                                        {step.title}
                                    </motion.h3>

                                    <motion.p
                                        className="text-gray-600 leading-relaxed text-sm"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + index * 0.2 }}
                                    >
                                        {step.description}
                                    </motion.p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

        </div>
    );
};

export default ProcessSection;