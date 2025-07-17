// Anda bisa menambahkan ikon dari library seperti 'react-icons'
// npm install react-icons
// import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative flex flex-col bg-zinc-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-700
                   transition-all duration-300 ease-in-out
                   hover:border-violet-500/80 hover:-translate-y-2 hover:shadow-2xl hover:shadow-violet-500/20">
      
      {/* Gambar yang bisa diklik */}
      <a href={project.linkDemo} target="_blank" rel="noopener noreferrer" className="block overflow-hidden">
        <img 
          src={project.gambar} 
          alt={project.nama} 
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </a>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{project.nama}</h3>
        <p className="text-zinc-400 text-sm flex-grow">{project.deskripsi}</p>
        
        {/* Daftar Teknologi */}
        <div className="flex flex-wrap gap-2 my-4">
          {project.teknologi.map((tech) => (
            <span key={tech} className="bg-zinc-700 text-zinc-300 text-xs font-medium px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        {/* Tombol Aksi */}
        <div className="flex gap-4 mt-auto pt-4 border-t border-zinc-700/50">
          <a
            href={project.linkDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full justify-center text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-lg transition-colors"
          >
            {/* <FiExternalLink /> (contoh ikon) */}
            Live Demo
          </a>
          <a
            href={project.linkGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 w-full justify-center text-sm font-semibold text-zinc-300 bg-zinc-700 hover:bg-zinc-600 px-4 py-2 rounded-lg transition-colors"
          >
            {/* <FiGithub /> (contoh ikon) */}
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;