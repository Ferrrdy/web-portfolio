const Footer = () => {
    return (
        <footer className="bg-zinc-900 text-zinc-400 py-10 border-t border-zinc-800">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
                    <div>
                        <h3 className="text-xl font-bold text-white">Ferdy Ashari Putra</h3>
                        <p className="text-sm">Full Stack Developer & UI/UX Designer</p>
                    </div>
                    <div className="text-sm">
                        <p>&copy; {new Date().getFullYear()} Ferdy Ashari Putra. All rights reserved.</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://github.com/Ferrrdy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
                        <a href="https://www.linkedin.com/in/ferdy-ashari-putra-00368828b/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="mailto:23081010058@student.upnjatim.ac.id" className="hover:text-white transition-colors">Email</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;