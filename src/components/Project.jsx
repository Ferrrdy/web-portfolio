import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import { projects } from '../data/data';

const Project = () => {
  return (
    <section id="projects" className="py-20 sm:py-24 mb-10">
      {/* CSS Kustom untuk Paginasi */}
      <style>{`
        .swiper-pagination {
          position: relative; /* Mengubah posisi agar bisa didorong ke bawah */
          margin-top: 2rem; /* Menambah jarak dari atas, sesuaikan nilai ini jika perlu */
        }
        .swiper-pagination-bullet {
          background: #fff; /* Mengubah warna titik menjadi putih */
          opacity: 0.5;
          width: 8px;
          height: 8px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
        }
      `}</style>
      
      <div className="max-w-4xl mx-auto text-center mb-16 px-6">
        <h2 className="text-5xl sm:text-5xl font-bold text-white">
          My Projects
        </h2>
      </div>
      
      {/* PERBAIKAN: Bungkus Swiper dengan div yang memiliki padding horizontal */}
      <div className="w-full px-4 sm:px-10">
        <Swiper
          modules={[Pagination, A11y, EffectCoverflow]}
          effect={'coverflow'}
          loop={true}
          centeredSlides={true}
          grabCursor={true}
          
          breakpoints={{
            // Untuk layar mobile (default)
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
              coverflowEffect: {
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
              },
            },
            // Untuk layar tablet
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
              coverflowEffect: {
                  rotate: 30,
                  stretch: 0,
                  depth: 150,
                  modifier: 1,
                  slideShadows: true,
              },
            },
            // Untuk layar desktop
            1024: {
              slidesPerView: 3,
              spaceBetween: 20, 
              coverflowEffect: {
                  rotate: 25,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
              },
            },
          }}
          // -----------------------------
          pagination={{ clickable: true }}
        >
          {projects?.map((project) => (
            <SwiperSlide key={project.id}>
              {/* Desain Kartu Proyek */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col transform transition-transform duration-300 hover:scale-105">
                {/* Gambar Proyek */}
                <div className="w-full h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.gambar})` }}
                ></div>
                
                {/* Konten Info Proyek */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900">{project.nama}</h3>
                  <p className="mt-2 text-sm text-gray-600 flex-grow">{project.deskripsi}</p>
                  
                  {/* Teknologi */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.teknologi.map((tag) => (
                      <span key={tag} className="bg-violet-900 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                          {tag}
                      </span>
                    ))}
                  </div>

                  {/* Tombol Aksi */}
                  <div className="mt-6">
                    <a 
                      href={project.linkGithub} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block w-full text-center bg-gray-200 text-gray-800 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-300 transition-colors"
                    >
                      Detail
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Project;
