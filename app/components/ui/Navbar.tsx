'use client';

import Image from 'next/image'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const handleLinkClick = () => {
        setOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [open]);

    const links = [
        { label: "Beranda", href: "#" },
        { label: "Layanan", href: "#layanan" },
        { label: "Harga", href: "#harga" },
        { label: "Portofolio", href: "#portofolio" },
        { label: "Alur Kerja", href: "#alur-kerja" },
        { label: "Testimoni", href: "#testimoni" },
    ];

    return (
        <>
            <nav className={`sticky top-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm' 
                    : 'bg-transparent'
            }`}>
                <div className="max-w-7xl md:max-w-9/12 mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Image src='/logo.png' alt='Bitara Dev' width={35} height={35} />
                            <span className="text-xl font-bold text-gray-900">Bitara Dev</span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            {links.map((item) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    className="relative text-gray-700 hover:text-bitara-primary transition-colors font-semibold"
                                    whileHover="hover"
                                    initial="rest"
                                    animate="rest"
                                >
                                    {item.label}
                                    <motion.span
                                        className="absolute left-0 -bottom-1 h-0.5 w-full bg-bitara-primary rounded-3xl"
                                        variants={{ rest: { scaleX: 0 }, hover: { scaleX: 1 } }}
                                        style={{ transformOrigin: 'left' }}
                                        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                                    />
                                </motion.a>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center gap-3">
                            <a
                                href="https://wa.me/6283136863620"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative overflow-hidden bg-linear-to-r from-bitara-primary via-bitara-primary to-bitara-dark border border-gray-200 text-white px-6 py-2.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-500 group/btn shadow-md inline-flex items-center"
                            >
                                <div className="absolute inset-0 -left-full group-hover/btn:left-full transition-all duration-700 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                                <SupportAgentIcon className="relative z-10 mr-2" />
                                <span className="relative z-10">Hubungi Kami</span>
                            </a>
                        </div>

                        <button
                            className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border transition-colors ${
                                scrolled 
                                    ? 'border-gray-200 hover:bg-gray-50' 
                                    : 'border-white/30 hover:bg-white/10'
                            }`}
                            onClick={() => setOpen(o => !o)}
                            aria-label="Toggle menu"
                            aria-expanded={open}
                        >
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {open ? (
                                    <g>
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </g>
                                ) : (
                                    <g>
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <line x1="3" y1="12" x2="21" y2="12" />
                                        <line x1="3" y1="18" x2="21" y2="18" />
                                    </g>
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setOpen(false)}
                        />

                        <motion.div
                            className="fixed top-[73px] left-0 right-0 bg-white shadow-2xl z-50 md:hidden border-t border-gray-100"
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        >
                            <div className="max-h-[calc(100vh-73px)] overflow-y-auto">
                                <div className="px-6 py-6 space-y-1">
                                    {links.map((item, index) => (
                                        <motion.a
                                            key={item.label}
                                            href={item.href}
                                            onClick={handleLinkClick}
                                            className="block px-4 py-3 text-gray-700 hover:text-bitara-primary hover:bg-gray-50 rounded-lg transition-all font-medium"
                                            initial={{ x: -20, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1 }}
                                            transition={{ delay: index * 0.05 }}
                                        >
                                            {item.label}
                                        </motion.a>
                                    ))}
                                </div>

                                <div className="px-6 pb-6 pt-4 border-t border-gray-100">
                                    <motion.a
                                        href="https://wa.me/6283136863620"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative overflow-hidden flex items-center justify-center w-full bg-linear-to-r from-bitara-primary to-bitara-dark text-white px-6 py-3.5 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 group/btn"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <div className="absolute inset-0 -left-full group-hover/btn:left-full transition-all duration-700 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                                        <SupportAgentIcon className="relative z-10 mr-2" />
                                        <span className="relative z-10">Hubungi Kami</span>
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar