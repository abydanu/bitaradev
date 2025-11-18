export interface Testimonial {
  id: number;
  rating: number;
  text: string;
  author: string;
  company: string;
}

export const testimoniData: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    text: "E-commerce platform yang dibangun meningkatkan penjualan online kami hingga 300%. ROI yang sangat menguntungkan.",
    author: "Maria Santos",
    company: "Fashion Brand"
  },
  {
    id: 2,
    rating: 5,
    text: "Website yang dibuat sangat profesional dan performa loading-nya sangat cepat. Tim sangat responsif dan memahami kebutuhan bisnis kami.",
    author: "Sarah Johnson",
    company: "Tech Startup"
  },
  {
    id: 3,
    rating: 5,
    text: "Sistem POS yang dikembangkan sangat membantu operasional restoran. Interface mudah digunakan dan fitur-fiturnya lengkap.",
    author: "Ahmad Rizki",
    company: "Local Restaurant"
  },
  {
    id: 4,
    rating: 4,
    text: "Website yang dibuat sangat profesional dan performa loading-nya sangat cepat. Tim sangat responsif dan memahami kebutuhan bisnis kami.",
    author: "Sarah Johnson",
    company: "Tech Startup"
  },
  {
    id: 5,
    rating: 5,
    text: "E-commerce platform yang dibangun meningkatkan penjualan online kami hingga 300%. ROI yang sangat menguntungkan.",
    author: "Maria Santos",
    company: "Fashion Brand"
  }
];