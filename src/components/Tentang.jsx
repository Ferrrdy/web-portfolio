import { listTools } from '../data/data';
import FadeInOnScroll from '../reactbits/FadeInOnScroll';

const Tentang = () => {
  return (
    <div className=''>
      {/* About me */}
      <div className="py-16 px-6 sm:px-10 md:px-20 max-w-6xl mx-auto">
        <h2 className="text-5xl sm:text-5xl font-bold mb-6">About me</h2>
        <FadeInOnScroll className="text-base sm:text-lg leading-relaxed">
          Hi, saya Ferdy. Sebagai Frontend Web Developer, saya berkomitmen untuk menciptakan antarmuka yang tidak hanya menarik secara visual, tetapi juga responsif, intuitif, dan ramah pengguna. Saya percaya bahwa desain yang baik harus berjalan seiring dengan performa dan aksesibilitas. Dengan keahlian dalam HTML, CSS, JavaScript, dan framework modern seperti React, saya senang mengubah ide menjadi tampilan digital yang fungsional dan interaktif. Saya selalu terbuka terhadap feedback, senang berkolaborasi dalam tim lintas disiplin, dan terus belajar untuk mengikuti perkembangan teknologi frontend. Bagi saya, setiap baris kode adalah peluang untuk menciptakan pengalaman pengguna yang lebih baik dan bermakna.
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
