import React, { useState, useEffect, useRef } from 'react';
import { 
  Palette, Code, BrainCircuit, Lightbulb, 
  CheckCircle2, Trophy, Star
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  description: string;
  level: number;
  achievements: string[];
  easterEgg?: {
    trigger: string;
    message: string;
  };
}

const SkillsSection: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [unlockedAchievements, setUnlockedAchievements] = useState<Set<string>>(new Set());
  const [showEasterEgg, setShowEasterEgg] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    {
      name: 'Diseño Gráfico',
      icon: <Palette size={24} />,
      description: 'Cuando no podía pagar diseñadores para mis proyectos, me convertí en uno. Aprendí a comunicar visualmente lo que las palabras no podían expresar, transformando ideas abstractas en identidades visuales que conectan emocionalmente con las personas.',
      level: 90,
      achievements: ['Maestro del Color', 'Experto en Composición'],
      easterEgg: {
        trigger: 'color',
        message: 'El diseño no es decoración, es comunicación. Cada color, cada forma cuenta una historia que las palabras no pueden.'
      }
    },
    {
      name: 'Programación',
      icon: <Code size={24} />,
      description: 'Sin recursos para contratar desarrolladores, me sumergí en el código. Descubrí que la programación no es solo sobre tecnología, sino sobre resolver problemas. Cada línea de código me acercaba más a la libertad de crear sin limitaciones.',
      level: 85,
      achievements: ['Arquitecto de Código', 'Solucionador de Problemas'],
      easterEgg: {
        trigger: 'código',
        message: 'La programación es el superpoder del siglo XXI. Con ella puedes crear mundos enteros desde cero.'
      }
    },
    {
      name: 'IA',
      icon: <BrainCircuit size={24} />,
      description: 'Mientras otros temían que la IA les quitara el trabajo, yo la convertí en mi aliada. Aprendí a utilizarla como un multiplicador de mi creatividad y productividad, permitiéndome hacer en horas lo que antes tomaba semanas.',
      level: 88,
      achievements: ['Pionero de IA', 'Innovador Tecnológico'],
      easterEgg: {
        trigger: 'ia',
        message: 'La IA no reemplaza la creatividad humana, la amplifica. El futuro pertenece a quienes saben colaborar con ella.'
      }
    },
    {
      name: 'Marketing Digital',
      icon: <Lightbulb size={24} />,
      description: 'Aprendí que el mejor producto del mundo fracasa sin la estrategia correcta. El marketing digital me permitió competir con grandes empresas sin su presupuesto, demostrando que la creatividad y el conocimiento pueden superar al dinero.',
      level: 92,
      achievements: ['Estratega Digital', 'Analista de Datos'],
      easterEgg: {
        trigger: 'marketing',
        message: 'El mejor marketing no se siente como marketing, se siente como ayuda. Cuando realmente resuelves problemas, no necesitas "vender".'
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSkillClick = (index: number) => {
    setActiveSkill(activeSkill === index ? null : index);
  };

  const unlockAchievement = (achievement: string) => {
    if (!unlockedAchievements.has(achievement)) {
      const newUnlocked = new Set(unlockedAchievements);
      newUnlocked.add(achievement);
      setUnlockedAchievements(newUnlocked);
      
      // Show notification
      const notification = document.createElement('div');
      notification.className = 'fixed bottom-4 right-4 bg-[#32ff7e] text-black p-3 rounded-lg shadow-lg z-50 flex items-center';
      notification.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
        </svg>
        <span>¡Logro desbloqueado: ${achievement}!</span>
      `;
      document.body.appendChild(notification);
      
      setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.5s ease';
        setTimeout(() => document.body.removeChild(notification), 500);
      }, 3000);
    }
  };

  const checkForEasterEgg = (skill: Skill) => {
    if (skill.easterEgg) {
      setShowEasterEgg(skill.easterEgg.message);
      setTimeout(() => setShowEasterEgg(null), 5000);
    }
  };

  return (
    <section id="skills" className="py-20 bg-[#1e1e2f]" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Aprende a desarrollar habilidades
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3c9dff] to-[#a667ff]"></span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-6">
            Cuando no tenía recursos para contratar especialistas, me convertí en uno. Estas son las habilidades que me permitieron crear mi propio camino y ahora generar oportunidades para otros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className={`bg-[#2a2a3d] rounded-lg p-6 cursor-pointer transform transition-all duration-500 hover:shadow-lg ${
                activeSkill === index ? 'scale-105 shadow-xl border border-[#3c9dff]/30' : 'hover:scale-102'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onClick={() => handleSkillClick(index)}
            >
              <div className="flex items-center mb-4">
                <div className="text-[#3c9dff] mr-3">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.name}</h3>
              </div>
              
              <div className="mb-4">
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#3c9dff] to-[#a667ff] transition-all duration-1000" 
                    style={{ width: isVisible ? `${skill.level}%` : '0%' }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>Principiante</span>
                  <span>Experto</span>
                </div>
              </div>
              
              {activeSkill === index && (
                <div className="mt-4 animate-fade-in">
                  <p className="text-gray-300 mb-4">{skill.description}</p>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-[#32ff7e] flex items-center mb-2">
                      <Trophy size={16} className="mr-1" />
                      Logros
                    </h4>
                    <div className="space-y-2">
                      {skill.achievements.map((achievement, i) => (
                        <div 
                          key={i}
                          className={`flex items-center p-2 rounded ${
                            unlockedAchievements.has(achievement) 
                              ? 'bg-[#32ff7e]/10 text-[#32ff7e]' 
                              : 'bg-gray-800/50 text-gray-400'
                          } transition-all duration-300 transform hover:translate-x-1`}
                          onClick={(e) => {
                            e.stopPropagation();
                            unlockAchievement(achievement);
                          }}
                        >
                          {unlockedAchievements.has(achievement) ? (
                            <CheckCircle2 size={16} className="mr-2 flex-shrink-0" />
                          ) : (
                            <Star size={16} className="mr-2 flex-shrink-0" />
                          )}
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button
                    className="mt-4 text-sm text-[#3c9dff] hover:underline group flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      checkForEasterEgg(skill);
                    }}
                  >
                    <span>Descubrir más sobre {skill.name.toLowerCase()}...</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <div className="p-6 bg-[#2a2a3d] rounded-lg border border-[#3c9dff]/20 transform hover:scale-102 transition-transform">
            <p className="text-xl font-semibold mb-4">
              "Aprendí a aprender porque no tenía otra opción. Ahora es mi mayor ventaja competitiva."
            </p>
            <p className="text-gray-400">
              Estas habilidades no son solo herramientas técnicas, son las llaves que me permitieron abrir puertas que parecían cerradas para siempre. Y ahora quiero enseñarte a forjar tus propias llaves.
            </p>
          </div>
        </div>
        
        {showEasterEgg && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-[#a667ff] text-white p-4 rounded-lg shadow-lg z-50 max-w-md text-center animate-bounce-in">
            <p>{showEasterEgg}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
