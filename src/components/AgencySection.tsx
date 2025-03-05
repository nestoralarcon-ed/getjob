import React, { useState } from 'react';
import { Palette, Sparkles, Target, Zap, Award, Users } from 'lucide-react';

const AgencySection: React.FC = () => {
  const [easterEggVisible, setEasterEggVisible] = useState(false);

  const showEasterEgg = () => {
    setEasterEggVisible(true);
    setTimeout(() => setEasterEggVisible(false), 5000);
  };

  return (
    <section id="agency" className="py-20 bg-[#1a1a28]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Mi Agencia
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3c9dff] to-[#a667ff]"></span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-6">
            De la pasión por el diseño y la comunicación nació mi propia agencia creativa.
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden transition-all duration-500 bg-gradient-to-br from-[#2a2a3d] to-[#ff7e32]/10">
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-gradient-to-r from-[#ff7e32] to-[#ff3278]">
                  <Palette size={24} className="text-white" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Huna Estudios</h3>
                
                <p className="text-gray-300 mb-6">
                  Mi agencia de comunicación y marketing digital nació de la necesidad de transformar ideas en experiencias visuales impactantes. Lo que comenzó como un proyecto personal se convirtió en un estudio creativo que ayuda a marcas a encontrar su voz única en un mundo saturado de mensajes.
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Award size={18} className="mr-2 text-[#ff7e32]" />
                    Servicios
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Zap size={16} className="mr-2 mt-1 flex-shrink-0 text-[#ff7e32]" />
                      <span>Diseño de identidad visual y branding</span>
                    </li>
                    <li className="flex items-start">
                      <Zap size={16} className="mr-2 mt-1 flex-shrink-0 text-[#ff7e32]" />
                      <span>Estrategias de marketing digital</span>
                    </li>
                    <li className="flex items-start">
                      <Zap size={16} className="mr-2 mt-1 flex-shrink-0 text-[#ff7e32]" />
                      <span>Gestión de campañas ADS y comunidades en RRSS</span>
                    </li>
                    <li className="flex items-start">
                      <Zap size={16} className="mr-2 mt-1 flex-shrink-0 text-[#ff7e32]" />
                      <span>Gestión de redes sociales y contenido</span>
                    </li>
                  </ul>
                </div>
                
                <a
                  href="https://wa.me/+593993147794"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center bg-gradient-to-r from-[#ff7e32] to-[#ff3278] text-white hover:opacity-90"
                >
                  <Users size={18} className="mr-2" />
                  Conectar con Huna
                </a>
              </div>
              
              <div className="md:w-1/2">
                <div 
                  className="rounded-xl overflow-hidden h-full min-h-[300px] relative"
                  style={{
                    backgroundImage: "url('https://source.unsplash.com/random/600x400?creative,agency,design')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-6">
                    <div className="mb-4">
                      <Target size={24} className="text-white mb-2" />
                      <h4 className="text-xl font-bold text-white">Lo que Huna significa para mí</h4>
                      <p className="text-gray-300">
                        Huna Estudios nació de la pasión de mi hermano, la de un amigo, y la mía por el diseño y la comunicación. Comencé como freelancer, y a medida que mis clientes crecían, transformé mi experiencia en una agencia completa.
                      </p>
                    </div>
                    
                    <a
                      href="https://wa.me/+593993147794"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center self-start bg-gradient-to-r from-[#ff7e32] to-[#ff3278] text-white hover:opacity-90"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                        <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"></path>
                        <path d="M9.5 13.5c.5 1.5 2.5 2 4 1"></path>
                      </svg>
                      Contactar con Huna
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {easterEggVisible && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ff7e32] text-white p-6 rounded-lg shadow-xl z-50 max-w-md text-center animate-bounce-in">
            <p className="text-lg">¡Has descubierto nuestro secreto! En Huna, "huna" significa "secreto" en hawaiano. Nuestra metodología se basa en descubrir el secreto único de cada marca para comunicarlo de forma auténtica.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AgencySection;