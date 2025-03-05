import React, { useState } from 'react';
import { Shield, Compass, Users, Zap, Award, Target, Palette } from 'lucide-react';

interface Project {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  theme: {
    primary: string;
    secondary: string;
    background: string;
    accent: string;
  };
  features: string[];
  easterEgg?: {
    element: string;
    message: string;
  };
  website?: string;
}

const ProjectsSection: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string>('effycent');
  const [easterEggMessage, setEasterEggMessage] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: 'effycent',
      name: 'Effycent AI',
      icon: <Compass size={24} />,
      description: 'Una comunidad de expertos en automatización e IA, diseñado por mi empresa, Effycent AI, nace como una idea en donde podamos contar con los mejores, que tengan conocimientos en programación, automatizaciones e IA',
      theme: {
        primary: '#3c9dff',
        secondary: '#32ff7e',
        background: '#2a2a3d',
        accent: '#a667ff'
      },
      features: [
        'Tomando las misiones del tablero de anuncios',
        'Encargándote del desarrollo de productos',
        'Desarrollando servicios para Effycent AI',
        'Haciendo misiones mientras mejoras tus habilidades'
      ],
      easterEgg: {
        element: 'taberna',
        message: '¡Has descubierto el secreto de la taberna! En Effycent AI, cada miembro es un aventurero en busca de la eficiencia perfecta.'
      },
      website: 'https://effycentai.com'
    },
    {
      id: 'omnitrix',
      name: 'Omnitrix Sales',
      icon: <Shield size={24} />,
      description: 'Una comunidad de vendedores en donde puedes negociar contratos, continuarlas, o conseguir las ventas por tu cuenta, tienes mucha flexibilidad. Es una comunidad liderada por mí, donde, gamificando las ventas, podemos ir aprendiendo nuevas habilidades',
      theme: {
        primary: '#a667ff',
        secondary: '#ff7e32',
        background: '#2a2a3d',
        accent: '#3c9dff'
      },
      features: [
        'Flexibilidad en la forma en la que puedes conseguir ventas',
        'Sistema de misiones y recompensas',
        'Comunidad de apoyo entre vendedores',
        'Comisiones competitivas por ventas'
      ],
      easterEgg: {
        element: 'dragón',
        message: '¡Has despertado al dragón! En Omnitrix Sales, cada vendedor lleva dentro el poder y la determinación de un dragón.'
      }
    },
    {
      id: 'huna',
      name: 'Huna Estudios',
      icon: <Palette size={24} />,
      description: 'Mi agencia de comunicación y marketing digital nació de la necesidad de transformar ideas en experiencias visuales impactantes. Lo que comenzó como un proyecto personal se convirtió en un estudio creativo que ayuda a marcas a encontrar su voz única.',
      theme: {
        primary: '#ff7e32',
        secondary: '#ff3278',
        background: '#2a2a3d',
        accent: '#ff3278'
      },
      features: [
        'Diseño de identidad visual y branding',
        'Estrategias de marketing digital',
        'Gestión de campañas ADS y comunidades en RRSS',
        'Gestión de redes sociales y contenido'
      ],
      easterEgg: {
        element: 'huna',
        message: '¡Has descubierto nuestro secreto! En Huna, "huna" significa "secreto" en hawaiano. Nuestra metodología se basa en descubrir el secreto único de cada marca para comunicarlo de forma auténtica.'
      }
    }
  ];

  const currentProject = projects.find(p => p.id === activeProject) || projects[0];

  return (
    <section id="projects" className="py-20 bg-[#1a1a28]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis empresas, tus oportunidades</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Además de Huna Estudios, que es mi agencia de comunicación y marketing, Effycent nace con el objetivo de ayudar y formar comunidades. Puedes tener las oportunidades que yo no tuve, si cumples los requisitos postula para entrar en ellas.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projects.map(project => (
            <button
              key={project.id}
              className={`px-6 py-3 rounded-full flex items-center transition-all duration-200 ${
                activeProject === project.id
                  ? `bg-[${project.theme.primary}] text-white`
                  : 'bg-[#2a2a3d] text-gray-300 hover:bg-[#3a3a4d]'
              }`}
              style={{
                backgroundColor: activeProject === project.id ? project.theme.primary : '#2a2a3d'
              }}
              onClick={() => setActiveProject(project.id)}
            >
              <span className="mr-2">{project.icon}</span>
              {project.name}
            </button>
          ))}
        </div>

        <div 
          className="max-w-5xl mx-auto rounded-2xl overflow-hidden transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, ${currentProject.theme.background} 0%, ${currentProject.theme.primary}20 100%)`
          }}
        >
          <div className="p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                  style={{ backgroundColor: currentProject.theme.primary }}
                >
                  {currentProject.icon}
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{currentProject.name}</h3>
                
                <p className="text-gray-300 mb-6">
                  {currentProject.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-lg font-semibold mb-3 flex items-center">
                    <Award size={18} className="mr-2" style={{ color: currentProject.theme.secondary }} />
                    {activeProject === 'huna' ? 'Servicios' : 'Cómo puedes aportar:'}
                  </h4>
                  <ul className="space-y-2">
                    {currentProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Zap size={16} className="mr-2 mt-1 flex-shrink-0" style={{ color: currentProject.theme.secondary }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {activeProject === 'effycent' && (
                  <a 
                    href="https://effycentai.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center mb-4 bg-gradient-to-r from-[#3c9dff] to-[#a667ff] text-white hover:opacity-90"
                  >
                    <Compass size={18} className="mr-2" />
                    Visitar Effycent AI
                  </a>
                )}
              </div>
              
              <div className="md:w-1/2">
                {activeProject === 'huna' ? (
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
                        <h4 className="text-xl font-bold text-white">
                          Lo que Huna significa para mí
                        </h4>
                        <p className="text-gray-300">
                          Huna Estudios nació de la pasión de mi hermano, la de un amigo, y la mía por el diseño y la comunicación. Comencé como freelancer, y a medida que mis clientes crecían, transformé mi experiencia en una agencia completa.
                        </p>
                      </div>
                      
                      <a
                        href="https://wa.me/+593993147794"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center self-start"
                        style={{ 
                          background: `linear-gradient(to right, ${currentProject.theme.primary}, ${currentProject.theme.accent})`,
                          color: 'white'
                        }}
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
                ) : (
                  <div 
                    className="rounded-xl overflow-hidden h-full min-h-[300px] relative"
                    style={{
                      backgroundImage: activeProject === 'effycent' 
                        ? "url('https://source.unsplash.com/random/600x400?tavern,technology')" 
                        : "url('https://source.unsplash.com/random/600x400?dragon,shield')",
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex flex-col justify-end p-6">
                      <div className="mb-4">
                        <Target size={24} className="text-white mb-2" />
                        <h4 className="text-xl font-bold text-white">
                          Misiones y Desafíos
                        </h4>
                        <p className="text-gray-300">
                          {activeProject === 'effycent' 
                            ? 'Si cumples los requisitos, la comunidad de Effycent es la adecuada para ti' 
                            : 'Si cumples los requisitos, la comunidad de Omnitrix Sales es la adecuada para ti'}
                        </p>
                      </div>
                      
                      <a
                        href="https://effycentai.com/trabaja-con-nosotros"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center self-start"
                        style={{ 
                          background: `linear-gradient(to right, ${currentProject.theme.primary}, ${currentProject.theme.accent})`,
                          color: 'white'
                        }}
                      >
                        <Users size={18} className="mr-2" />
                        Postular a la comunidad
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {easterEggMessage && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#a667ff] text-white p-6 rounded-lg shadow-xl z-50 max-w-md text-center animate-bounce-in">
            <p className="text-lg">{easterEggMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;