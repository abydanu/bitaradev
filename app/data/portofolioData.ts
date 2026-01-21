export interface PortfolioItem {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    link: string;
}

export const portofolioData: PortfolioItem[] = [
    {
        id: 1,
        title: 'Danu Rent Car',
        category: 'Company Profile',
        description: 'Landing Page Rental Mobil berbasis CMS menampilkan layanan, daftar mobil, dan informasi kontak secara ringkas dan menarik',
        image: '/portofolio/rental-mobil.png', 
        link: "https://rental-mobil-danu.vercel.app"
    },
    {
        id: 2,
        title: 'Sistem Pengaduan Masyarakat',
        category: 'Other',
        description: 'Sistem pengaduan masyarakat berbasis web untuk menampung, mengelola, dan menindaklanjuti laporan warga secara terstruktur, transparan, dan mudah digunakan',
        image: '/portofolio/sipengmas.png',
        link: "https://sistem-pengaduan-masyarakat-bice.vercel.app"
    },
    {
        id: 3,
        title: 'Sistem Manajemen Indibiz Telkom',
        category: 'Other',
        description: 'Aplikasi manajemen terintegrasi untuk pengelolaan data sales, paket layanan, dan input pelanggan Indibiz agar proses administrasi lebih efisien dan terstruktur.',
        image: '/portofolio/telkom.png',
        link: "https://indibizrayamadiun.vercel.app"
    },
    {
        id: 4,
        title: 'Website Booking & Informasi Bus AD-Trans',
        category: 'Company Profile',
        description: 'Website layanan transportasi yang menyediakan informasi armada, keunggulan layanan, serta kemudahan pemesanan dan komunikasi antara pelanggan dan admin.',
        image: '/portofolio/booking-bus.jpeg',
        link: "#"
    },
    {
        id: 5,
        title: 'Sistem Absensi Karyawan',
        category: 'Other',
        description: 'Aplikasi berbasis web untuk mengelola absensi karyawan secara real-time, dilengkapi fitur check-in lokasi, rekap kehadiran, dan monitoring data absensi bulanan secara terpusat.',
        image: '/portofolio/absensi.jpeg',
        link: "#"
    },
    {
        id: 6,
        title: 'Website Promosi Perumahan',
        category: 'Company Profile',
        description: 'Website promosi properti untuk menampilkan informasi perumahan, tipe rumah, harga, dan promo secara visual, responsif, dan mudah diakses oleh calon pembeli.',
        image: '/portofolio/mockup-perumahan.jpeg',
        link: "#"
    },
];