export const listTools = [
  { id: 1, nama: "Visual Studio Code", ket: "Code Editor" },
  { id: 2, nama: "React JS", ket: "Framework" },
  { id: 3, nama: "Tailwind CSS", ket: "Framework" },
  { id: 4, nama: "HTML", ket: "Markup Language" },
  { id: 5, nama: "CSS", ket: "Style Sheet Language" },
  { id: 6, nama: "JavaScript", ket: "Programming Language" },
  { id: 7, nama: "TypeScript", ket: "Typed Superset of JS" },
  { id: 8, nama: "Git", ket: "Version Control" },
  { id: 9, nama: "GitHub", ket: "Repository Hosting" },
  { id: 10, nama: "NPM", ket: "Package Manager" },
  { id: 11, nama: "Vite", ket: "Build Tool" },
  { id: 12, nama: "Postman", ket: "API Testing" },
  { id: 13, nama: "Figma", ket: "Design Tool" },
  { id: 14, nama: "Canva", ket: "Design Tool" },
  { id: 15, nama: "Next.js", ket: "Fullstack Framework" },
  { id: 16, nama: "Vercel", ket: "Deployment Platform" },
];

import Proyek1 from '../assets/project/proyek1.png';
import Proyek2 from '../assets/project/proyek2.png';
import Proyek3 from '../assets/project/proyek3.png';
import Proyek4 from '../assets/project/proyek4.png';
import Proyek5 from '../assets/project/proyek5.png';


export const projects = [
  {
    id: 1,
    nama: "Ortodox Shopping App (on Progress)",
    deskripsi: "Ortodox Shopping App adalah platform belanja online yang berfokus pada produk fashion modern. Dirancang dengan antarmuka yang bersih dan responsif, pengguna dapat menjelajahi koleksi produk, melakukan pembayaran online, dan mendapatkan pengalaman belanja yang efisien.",
    gambar: Proyek1,
    linkGithub: "https://github.com/Ferrrdy/ortodox-origin",
    teknologi: ["React JS", "React Native", "Tailwind CSS", "Midtrans", "Laravel", "MySQL", "PHP", "JQuery"],
  },
  {
    id: 2,
    nama: "KarirKu",
    deskripsi: "KarirKu adalah platform karir yang dirancang khusus untuk generasi muda. Pengguna dapat membuat profil profesional, menampilkan pengalaman dan keterampilan, serta mencari lowongan kerja atau magang yang sesuai dengan minat mereka.",
    gambar: Proyek2,
    linkGithub: "https://www.figma.com/design/nYG9G1r00qC6NzT33y6O7B/KarirKu-Prototype-Design?node-id=0-1&t=mYkUPlXJ10IkYhJC-1",
    teknologi: ["Figma"],
  },
  {
    id: 3,
    nama: "Rental Audio App (MoriaSound)",
    deskripsi: "MoriaSound adalah aplikasi berbasis desktop yang dirancang untuk memudahkan pengelolaan penyewaan alat audio dan pencatatan event. Aplikasi ini mencakup fitur manajemen pelanggan, jadwal event, data transaksi, serta informasi kontak dan lokasi usaha dalam satu dashboard yang praktis dan efisien.",
    gambar: Proyek3,
    linkGithub: "https://github.com/Ferrrdy/MoriaSound",
    teknologi: ["Java", "NetBeans", "MySQL", "JQuery"],
  },
  {
    id: 4,
    nama: "Matur Pak Wali",
    deskripsi: "Matur Pak Wali adalah website pengaduan masyarakat yang ditujukan untuk warga Surabaya dalam menyampaikan laporan, kritik, maupun saran terkait pelayanan publik atau kondisi lingkungan sekitar. Aplikasi ini bertujuan menjadi jembatan antara warga dan pemerintah kota untuk menciptakan pelayanan yang lebih responsif dan transparan.",
    gambar: Proyek4,
    linkGithub: "https://github.com/Abaysaputra/matur-pak-wali",
    teknologi: ["PHP Native", "MySQL", "JQuery", "Bootstrap", "HTML"],
  },
  {
    id: 5,
    nama: "Sekolah.",
    deskripsi: "Website ini dirancang untuk memudahkan akses informasi dan komunikasi antara sekolah, siswa, orang tua, dan masyarakat. SMAN 1 Loceret menyajikan berbagai informasi penting seperti profil sekolah, kegiatan akademik, jadwal acara, PPDB, serta kontak dan lokasi sekolah dalam satu tampilan yang modern dan mudah digunakan. Melalui platform ini, kami berharap terjalin hubungan yang lebih baik antara sekolah dan seluruh pihak yang terlibat dalam proses pendidikan.",
    gambar: Proyek5,
    linkGithub: "#",
    teknologi: ["PHP", "CSS", "JS"],
  },
];
