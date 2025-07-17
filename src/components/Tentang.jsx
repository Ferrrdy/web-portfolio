import { listTools } from '../data/data';
import FadeInOnScroll from '../reactbits/FadeInOnScroll';

const Tentang = () => {
  return (
    <div className=''>
      {/* About me */}
      <div className="py-16 px-6 sm:px-10 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-5xl font-bold mb-6">About me</h2>
        <FadeInOnScroll className="text-base sm:text-lg leading-relaxed text-justify">
          Hi, saya Ferdy. Sebagai Full Stack Web Developer dan Designer, saya percaya bahwa desain dan fungsionalitas harus berjalan beriringan. Setiap proyek yang saya kerjakan dirancang agar tidak hanya menarik secara visual, tetapi juga memberikan pengalaman pengguna yang intuitif dan efisien. Saya senang memecahkan masalah, menjelajahi teknologi baru, dan menciptakan solusi digital yang berdampak nyata bagi pengguna maupun bisnis. Dalam proses kerja, saya selalu mengutamakan detail, kolaborasi yang baik, serta kemauan untuk terus belajar agar setiap hasil yang saya bangun mampu menjawab kebutuhan pengguna secara tepat dan inovatif.
        </FadeInOnScroll>
      </div>  

      {/* Tools */}
      <div className="py-5 px-6 sm:px-10 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-5xl font-bold text-white mb-10">
          Teknologi & Tools
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {listTools.map((tool) => (
            <div
              key={tool.id}
              className="group flex flex-col items-center text-center p-4 bg-zinc-800 rounded-lg border border-transparent hover:border-violet-500 hover:-translate-y-1 transition-all duration-300"
            >
              <img
                src={tool.gambar}
                alt={tool.nama}
                className="w-16 h-16 mb-4 transition-transform duration-300 group-hover:scale-110"
              />
              <h4 className="font-semibold text-white">{tool.nama}</h4>
              <p className="text-sm text-zinc-400">{tool.ket}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Tentang;
