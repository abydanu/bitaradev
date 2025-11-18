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
        title: 'Sistem Informasi Desa Modern',
        category: 'Pengembangan Sistem Informasi',
        description: 'Layanan administrasi secara berbasis web untuk mempermudah pembuatan surat, dokumen dan layanan publik',
        image: '/portofolio/porto.jpg', 
        link: "https://abydanu.my.id"
    },
    {
        id: 2,
        title: 'Aplikasi Pembelajaran',
        category: 'Pengembangan Sistem Informasi',
        description: 'Sistem informasi untuk manajemen pembelajaran dan ujian online',
        image: '/portofolio/porto.jpg',
        link: "https://indibizrayamadiun.vercel.app"
    },
    {
        id: 3,
        title: 'Konversi Dokumen dan File',
        category: 'Other',
        description: 'Aplikasi untuk konversi berbagai format dokumen dengan mudah',
        image: '/portofolio/porto.jpg',
        link: "https://abydanu.my.id"
    },
    {
        id: 4,
        title: 'Premium Encryption',
        category: 'Other',
        description: 'Sistem enkripsi data tingkat premium untuk keamanan maksimal',
        image: '/portofolio/porto.jpg',
        link: "https://abydanu.my.id"
    },
    {
        id: 5,
        title: 'PhotoBox Studio',
        category: 'Other',
        description: 'Platform manajemen studio foto profesional',
        image: '/portofolio/porto.jpg',
        link: "https://abydanu.my.id"
    },
    {
        id: 6,
        title: 'Sistem Kesehatan Terintegrasi',
        category: 'Pengembangan Sistem Informasi',
        description: 'Solusi digital untuk manajemen data kesehatan dan rekam medis',
        image: '/portofolio/porto.jpg',
        link: "https://abydanu.my.id"
    }
];