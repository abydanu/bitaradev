import {
    Email,
    Phone,
    Code,
    DesignServices,
    ShoppingCart,
    PhoneIphone
} from '@mui/icons-material';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="bg-linear-to-tl from-bitara-so-dark to-bitara-5 text-gray-300 py-16">
            <div className="max-w-7xl md:max-w-9/12 mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Image src='/logo.png' width={30} height={30} alt='logo' />
                            <h3 className="text-xl font-bold text-white">
                                Bitara<span className="text-bitara-primary">Dev</span>
                            </h3>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed mb-6">
                            Bitara Dev adalah agensi digital premier yang berfokus pada pembuatan solusi web yang kreatif dan efektif untuk membantu bisnis Anda tumbuh dan berkembang di era digital.
                        </p>
                        <div className="flex flex-col gap-3 -mt-3">
                            <h1 className='text-[15px] font-semibold text-bitara-primary'>Mendukung Pembayaran</h1>
                            <div className="flex gap-5 max-w-3xl">
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/f/f5/BANK_BRI_logo_%28vertical%29.svg" alt="BRI" height="40" width="40" />
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/5/5c/Bank_Central_Asia.svg" alt="BCA" height="40" width="40" />
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Bank_Mandiri_logo_2016.svg" alt="Mandiri" height="40" width="40" />
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/e/e0/QRIS_Logo.svg" alt="QRIS" height="40" width="40" />
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/7/72/Logo_dana_blue.svg" alt="Dana" height="40" width="40" />
                                <Image src="https://upload.wikimedia.org/wikipedia/commons/8/86/Gopay_logo.svg" alt="Gopay" height="40" width="40" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                            Layanan Kami
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <span className="text-gray-400 transition-colors flex items-center gap-2">
                                    <DesignServices className="text-blue-400 text-sm" fontSize='medium' /> Desain Web
                                </span>
                            </li>
                            <li>
                                <span className="text-gray-400 transition-colors flex items-center gap-2">
                                    <Code className="text-blue-400 text-sm" /> Pengembangan Web
                                </span>
                            </li>
                            <li>
                                <span className="text-gray-400 transition-colors flex items-center gap-2">
                                    <PhoneIphone className="text-blue-400 text-sm" /> Pengembangan Aplikasi
                                </span>
                            </li>
                            <li>
                                <span className="text-gray-400 transition-colors flex items-center gap-2">
                                    <ShoppingCart className="text-blue-400 text-sm" /> E-Commerce
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
                            Hubungi Kami
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Email className="text-blue-400 text-xl shrink-0 mt-1" />
                                <a href="mailto:bitaradev@gmail.com" target='_blank' className="text-gray-400 hover:text-blue-400 transition-colors break-all">
                                    bitaradev@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="text-blue-400 text-xl hrink-0 mt-1" />
                                <a href="https://wa.me/6283136863620" target='_blank' className="text-gray-400 hover:text-blue-400 transition-colors">
                                    +62 831 3686 3620
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 ">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500 text-sm">
                            © 2025 Bitara Dev. All Right Reserved.
                        </p>

                        <div className="flex gap-3">
                            <a href="https://tiktok.com/@bitara.dev" target='_blank' className="w-10 h-10 bg-[#1a2332] rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com/bitara.dev" target='_blank' className="w-10 h-10 bg-[#1a2332] rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61583968942990" target='_blank' className="w-10 h-10 bg-[#1a2332] rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;