interface PaketTier {
    nama: string
    harga: string
    periode: string
    deskripsi: string
    fitur: string[]
    textTombol: string
}

export const paketHarga: PaketTier[] = [
    {
        nama: "Landing Page",
        harga: "Rp 499.000",
        periode: "/ project",
        deskripsi: "Cocok untuk bisnis kecil",
        fitur: [
            "Desain satu halaman profesional",
            "Desain responsif untuk semua perangkat",
            "Formulir kontak & integrasi email",
            "Optimasi SEO dasar",
            "Dukungan teknis 1 bulan"
        ],
        textTombol: "Mulai Sekarang"
    },
    {
        nama: "E-Commerce",
        harga: "Rp 10.000.000",
        periode: "/ project",
        deskripsi: "Untuk toko online",
        fitur: [
            "Fungsionalitas e-commerce lengkap",
            "Manajemen produk & kategori",
            "Integrasi payment gateway lokal",
            "Manajemen inventaris otomatis",
            "Dukungan teknis 3 bulan"
        ],
        textTombol: "Mulai Sekarang"
    },
    {
        nama: "Website / Aplikasi Kustom",
        harga: "Konsultasi",
        periode: "/ project",
        deskripsi: "Solusi bisnis premium",
        fitur: [
            "Desain & fungsionalitas kustom",
            "Fitur lanjutan sesuai kebutuhan",
            "Integrasi CMS profesional",
            "Pengembangan API & integrasi",
            "Dukungan teknis 6 bulan"
        ],
        textTombol: "Mulai Sekarang"
    }
]