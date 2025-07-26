import Tools1 from "../assets/tools/vscode.png";
import Tools2 from "../assets/tools/reactjs.png";
import Tools4 from "../assets/tools/tailwind.png";
import Tools5 from "../assets/tools/bootstrap.png";
import Tools6 from "../assets/tools/js.png";
import Tools7 from "../assets/tools/nodejs.png";
import Tools8 from "../assets/tools/github.png";
import Tools10 from "../assets/tools/canva.png";
import Tools11 from "../assets/tools/figma.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1000",
  },
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
    teknologi: ["Figma", "Desain", "UI/UX", "Color Hunt"],
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
