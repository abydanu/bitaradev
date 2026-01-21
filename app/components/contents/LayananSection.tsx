import { motion } from 'framer-motion'
import LayananCard from '../ui/LayananCard'
import LanguageIcon from '@mui/icons-material/Language';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SearchIcon from '@mui/icons-material/Search';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import { AccessTimeFilled, ElectricBolt, VerifiedUser } from '@mui/icons-material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CallIcon from "@mui/icons-material/Call";

const LayananSection = () => {
    const bottomItems = [
        { icon: <VerifiedUser className="text-bitara-primary text-2xl" />, text: "Jaminan Keamanan" },
        { icon: <CheckCircleIcon className="text-bitara-primary text-2xl" />, text: "Garansi Kualitas" },
        { icon: <AccessTimeFilled className="text-bitara-primary text-2xl" />, text: "Pengerjaan Tepat Waktu" },
        { icon: <CallIcon className="text-bitara-primary text-2xl" />, text: "Dukungan 24/7" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0,
            y: 50,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
                duration: 0.6
            }
        } as const
    };

    const bottomItemVariants = {
        hidden: { 
            opacity: 0,
            x: -30,
            scale: 0.95
        },
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                delay: index * 0.1,
                type: "spring",
                stiffness: 120,
                damping: 15
            }
        }) as const
    };

    const services = [
        {
            icon: <LanguageIcon className="text-bitara-primary text-3xl" />,
            title: "Website Company Profile",
            desc: "Website profesional untuk memperkenalkan bisnis Anda kepada dunia. Ideal untuk UMKM dan perusahaan yang ingin tampil elegan."
        },
        {
            icon: <ShoppingCartIcon className="text-bitara-primary text-3xl" />,
            title: "Toko Online (E-Commerce)",
            desc: "Bangun toko online lengkap dengan sistem pembayaran terintegrasi, termasuk QRIS, transfer bank, dan berbagai metode lain."
        },
        {
            icon: <SmartphoneIcon className="text-bitara-primary text-3xl" />,
            title: "Aplikasi Mobile Android & iOS",
            desc: "Aplikasi user-friendly untuk menjangkau pelanggan lewat smartphone. Dibuat khusus sesuai kebutuhan bisnis Anda."
        },
        {
            icon: <SearchIcon className="text-bitara-primary text-3xl" />,
            title: "Optimasi SEO",
            desc: "Naikkan peringkat website Anda di Google dengan strategi SEO yang terfokus pada kata kunci dan target pasar Indonesia."
        },
        {
            icon: <StorageIcon className="text-bitara-primary text-3xl" />,
            title: "Pengembangan Sistem Informasi",
            desc: "Bangun sistem informasi custom untuk manajemen bisnis Anda — dari HR, CRM, hingga ERP skala kecil dan menengah."
        },
        {
            icon: <BuildIcon className="text-bitara-primary text-3xl" />,
            title: "Jasa Maintenance Website",
            desc: "Kami bantu merawat website agar tetap cepat, aman, dan selalu up-to-date dengan teknologi terbaru."
        }
    ];

    return (
        <section className='scroll-mt-28 mt-20' id="layanan">
            <div className="max-w-7xl md:max-w-9/12 mt-40 mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="mb-14 z-50"
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
                        <ElectricBolt className="w-2 md:w-4 h-2 md:h-4" />
                        <span className='text-[12px] md:text-base text-bitara-5'>Layanan Kami</span>
                    </motion.div>
                    <h2 className="text-3xl md:text-4xl font-bold mt-4 text-gray-900">
                        Solusi Digital Premium untuk Bisnis Anda
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Kami menyediakan berbagai layanan digital inovatif dan berkualitas tinggi
                        untuk membantu bisnis Anda berkembang dan sukses di era digital.
                    </p>
                </motion.div>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} variants={cardVariants}>
                            <LayananCard
                                icon={service.icon}
                                title={service.title}
                                desc={service.desc}
                            />
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 justify-center gap-6 mt-11"
                >
                    {bottomItems.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={bottomItemVariants}
                            className="flex items-center gap-3 bg-white border px-6 py-4 rounded-xl shadow-sm"
                            style={{ borderColor: "rgba(0, 119, 255, 0.15)" }}
                        >
                            {item.icon}
                            <span className="text-gray-700 font-medium md:text-base text-[13px]">{item.text}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default LayananSection