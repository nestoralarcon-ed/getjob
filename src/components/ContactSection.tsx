import React from 'react';
import { Mail, Youtube, GitBranch as BrandTiktok } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#1e1e2f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contacto</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            ¿Tienes alguna pregunta o propuesta? ¡Hablemos!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#2a2a3d] rounded-xl p-8 flex flex-col">
            <h3 className="text-2xl font-bold mb-6">Conecta conmigo</h3>
            
            <p className="text-gray-300 mb-8">
              Estoy siempre abierto a nuevas oportunidades, colaboraciones y conversaciones inspiradoras. No dudes en contactarme a través de cualquiera de estos canales.
            </p>
            
            <div className="space-y-6 flex-grow">
              <a 
                href="mailto:info.nestoralarcon@gmail.com" 
                className="flex items-center p-4 rounded-lg bg-[#1e1e2f] hover:bg-[#3c9dff]/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#3c9dff]/20 flex items-center justify-center mr-4 group-hover:bg-[#3c9dff]/30 transition-colors">
                  <Mail size={24} className="text-[#3c9dff]" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-400 group-hover:text-[#3c9dff] transition-colors">info.nestoralarcon@gmail.com</p>
                </div>
              </a>
              
              <a 
                href="https://www.youtube.com/@nestoralarcon.oficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-lg bg-[#1e1e2f] hover:bg-red-500/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mr-4 group-hover:bg-red-500/30 transition-colors">
                  <Youtube size={24} className="text-red-500" />
                </div>
                <div>
                  <h4 className="font-medium">YouTube</h4>
                  <p className="text-gray-400 group-hover:text-red-500 transition-colors">@nestoralarcon.oficial</p>
                </div>
              </a>
              
              <a 
                href="https://www.tiktok.com/@nestoralarcon.oficial" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-4 rounded-lg bg-[#1e1e2f] hover:bg-[#00f2ea]/10 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#00f2ea]/20 flex items-center justify-center mr-4 group-hover:bg-[#00f2ea]/30 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00f2ea]">
                    <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path>
                    <path d="M15 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
                    <path d="M15 8v8a4 4 0 0 1-4 4"></path>
                    <line x1="15" y1="4" x2="15" y2="12"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">TikTok</h4>
                  <p className="text-gray-400 group-hover:text-[#00f2ea] transition-colors">Mi TikTok</p>
                </div>
              </a>
            </div>
            
            <div className="mt-8 p-4 rounded-lg bg-[#32ff7e]/10 border border-[#32ff7e]/20">
              <p className="text-[#32ff7e] text-sm">
                <span className="font-bold">Consejo:</span> Si buscas una respuesta rápida, el email es la mejor opción. ¡Reviso mi bandeja de entrada diariamente!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;