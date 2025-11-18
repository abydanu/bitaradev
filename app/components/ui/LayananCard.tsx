import { toRgba, ACCENT } from "@/app/utils/color"
import { motion } from "framer-motion"

interface ServiceCardProps {
    icon: React.ReactNode
    title: string
    desc: string
}

const LayananCard = ({ icon, title, desc }: ServiceCardProps) => {
    return (
        <motion.div
            className="group relative bg-white p-8 rounded-2xl text-left border transition-all duration-500 overflow-hidden hover:shadow-2xl"
            style={{
                borderColor: toRgba(ACCENT, 0.18),
                boxShadow: `0 2px 12px ${toRgba('#000', 0.04)}`
            }}
            whileHover="hover"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-bitara-primary via-bitara-secondary to-bitara-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-bitara-primary to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-all duration-700" />
            <div className="absolute top-0 left-0 w-20 h-1 bg-bitara-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-1000 ease-in-out" />

            <div
                className="pointer-events-none absolute -top-6 -right-6 w-40 h-40 rounded-full transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-2 group-hover:translate-x-2 group-hover:rotate-45"
                style={{ backgroundColor: toRgba(ACCENT, 0.06) }}
            />

            <div
                className="pointer-events-none absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-500 group-hover:scale-150 group-hover:rotate-180"
                style={{ backgroundColor: toRgba('#3AABDB', 0.1) }}
            />
            <div
                className="pointer-events-none absolute -top-4 -right-4 w-12 h-12 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-700 group-hover:scale-125 group-hover:-rotate-90"
                style={{ backgroundColor: toRgba('#2E59A0', 0.15) }}
            />

            <div className="flex items-start justify-between mb-4 relative z-10">

                <motion.div
                    className="w-12 h-12 rounded-xl grid place-items-center"
                    style={{
                        backgroundColor: toRgba(ACCENT, 0.12),
                        color: ACCENT
                    }}
                    variants={{
                        hover: {
                            scale: 1.0,
                        }
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                    }}
                >
                    <motion.div
                        variants={{
                            hover: { scale: 1.2 }
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 15
                        }}
                    >
                        {icon}
                    </motion.div>
                </motion.div>

                <div className="flex items-center gap-2">
                    <span
                        className="w-1.5 h-1.5 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:animate-pulse"
                        style={{ backgroundColor: ACCENT }}
                    />
                    <span
                        className="w-1.5 h-1.5 rounded-full opacity-60 transition-all duration-500 group-hover:opacity-100 group-hover:scale-125 group-hover:animate-bounce"
                        style={{ backgroundColor: ACCENT }}
                    />
                </div>
            </div>

            <h3 className="text-lg font-semibold text-gray-900 mb-2 relative z-10 transition-colors duration-300 group-hover:text-bitara-dark">
                {title}
            </h3>

            <p className="text-gray-600 text-sm mb-4 relative z-10 transition-colors duration-300 group-hover:text-gray-700">
                {desc}
            </p>

            <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: `inset 0 0 0 2px ${toRgba(ACCENT, 0.3)}` }}
            />

            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

        </motion.div>
    )
}

export default LayananCard
