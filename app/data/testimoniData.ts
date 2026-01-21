export interface Testimonial {
  id: number;
  rating: number;
  text: string;
  author: string;
}

export const testimoniData: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "Sejak menggunakan website absensi karyawan dari Bitara Dev, pengelolaan kehadiran karyawan menjadi jauh lebih tertata. Sistemnya praktis dan mudah digunakan",
    author: "HRD Perusahaan"
  },
  {
    id: 2,
    rating: 5,
    text: "Sejak menggunakan website dari Bitara Dev, pemesanan rental mobil kami meningkat. Informasi layanan jadi lebih jelas dan calon pelanggan lebih mudah menghubungi kami. Sangat membantu untuk pemasaran",
    author: "Owner UMKM"
  },
  {
    id: 3,
    rating: 5,
    text: "Dengan landing page dari Bitara Dev, minat calon pembeli kami meningkat. Tidak perlu lagi memikirkan copywriting website, semuanya sudah ditangani dengan baik. Terima kasih Bitara Dev",
    author: "Manager Marketing"
  },
  {
    id: 4,
    rating: 4,
    text: "Website yang dibuat sangat profesional dan performa loading-nya sangat cepat. Tim sangat responsif dan memahami kebutuhan bisnis kami.",
    author: "Owner UMKM"
  },
  {
    id: 5,
    rating: 5,
    text: "Dengan adanya Sistem Pengaduan Masyarakat dari Bitara Dev, pengelolaan aduan warga menjadi lebih terstruktur dan mudah dipantau. Sangat membantu kinerja Perangkat Desa.",
    author: "Perangkat Desa"
  }
];