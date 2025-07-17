import { div } from 'framer-motion/client';
import { listTools } from '../data/data';
import FadeInOnScroll from '../reactbits/FadeInOnScroll';

const Tentang = () => {
  return (
    <div className=''>
      {/* About me */}
      <div className="py-16 px-6 sm:px-10 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-5xl font-bold mb-6">About me</h2>
        <FadeInOnScroll className="text-base sm:text-lg leading-relaxed">
          Halo! Saya mahasiswa semester 5 program studi Informatika yang sedang fokus menekuni dunia Web Development, terutama di bidang Front-End. Saya tertarik menciptakan antarmuka yang tidak hanya berfungsi dengan baik, tetapi juga memberikan pengalaman yang menyenangkan dan intuitif bagi pengguna. Minat saya dimulai dari keingintahuan tentang bagaimana sebuah halaman web bisa terlihat menarik dan sekaligus fungsional. Dari situlah saya mulai mendalami HTML, CSS, dan JavaScript, hingga akhirnya jatuh hati pada teknologi seperti React, Tailwind CSS, dan berbagai framework modern lainnya. Bagi saya, belajar adalah proses yang tidak pernah berhenti. Saya senang mencoba hal-hal baru, baik dalam hal desain, animasi, maupun interaksi pengguna. Saya juga aktif membangun proyek pribadi untuk terus melatih kemampuan serta memperluas portofolio saya. Saat ini, saya sedang memperdalam pemahaman saya tentang pengembangan web yang efisien, responsive design, serta prinsip UI/UX. Ke depannya, saya berharap bisa berkontribusi dalam tim pengembangan produk digital yang berdampak dan terus bertumbuh sebagai seorang Front-End Developer yang profesional.
        </FadeInOnScroll>
      </div>  

      {/* Tools */}
      <div className="py-5 px-6 sm:px-10 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-5xl font-bold text-white mb-6">
          Teknologi & Tools
        </h2>

        <div className="flex flex-wrap gap-3">
          {listTools.map((tool, index) => (
            <span
              key={index}
              className="bg-violet-900 text-white text-sm font-medium px-3 py-1 rounded-2xl shadow-sm"
            >
              {tool.nama}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tentang;
