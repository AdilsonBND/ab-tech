export default function Footer() {
    return (
        <footer className="mt-15 mb-8 w-full flex justify-center">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50 w-full max-w-[700px] gap-4">
                <div className="text-center md:text-left">
                    <span>© 2025 ABTech</span>
                    <span className="ml-2">All rights reserved.</span>
                </div>
                <div className="flex gap-4">
                    <a href="https://github.com/AdilsonBnD" target="_blank" rel="noopener noreferrer">
                        <img src="/contact/git.png" alt="GitHub" className="w-5 h-5 hover:opacity-80 transition-opacity" />
                    </a>
                    <a href="https://www.linkedin.com/in/adilson-luiz-biondo-1baa49131" target="_blank" rel="noopener noreferrer">
                        <img src="/contact/linkedin.png" alt="LinkedIn" className="w-5 h-5 hover:opacity-80 transition-opacity" />
                    </a>
                    <a href="https://wa.me/44999808014" target="_blank" rel="noopener noreferrer">
                        <img src="/contact/whats.png" alt="WhatsApp" className="w-5 h-5 hover:opacity-80 transition-opacity" />
                    </a>
                    <a href="mailto:adilsonbnd@hotmail.com  ">
                        <img src="/contact/email.png" alt="E-mail" className="w-5 h-5 hover:opacity-80 transition-opacity" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
