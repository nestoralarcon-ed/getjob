import React, { useState, useEffect } from 'react';
import { GraduationCap, Briefcase, Award, Sparkles, Zap, Target } from 'lucide-react';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  easterEgg?: string;
}

const AboutSection: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [easterEggVisible, setEasterEggVisible] = useState<number | null>(null);
  const [animateItems, setAnimateItems] = useState<boolean[]>([false, false, false, false, false]);

  const timelineItems: TimelineItem[] = [
    {
      year: '2020',
      title: 'Descubro que soy bueno aprendiendo a aprender',
      description: 'Cuando todas las puertas parecían cerradas, descubrí mi superpoder: la capacidad de aprender cualquier cosa por mí mismo. En un mundo donde nadie apostaba por mí, decidí convertir mi curiosidad en mi mayor ventaja competitiva.',
      icon: <GraduationCap size={24} />,
      easterEgg: 'La curiosidad es el motor del cambio. Nunca dejes de preguntarte "¿y si lo intento de otra manera?"'
    },
    {
      year: '2021',
      title: 'Llegando a nivel avanzado en marketing y diseño gráfico',
      description: 'Convertí internet en mi campus. Dominé el marketing digital y el diseño gráfico mientras mis amigos seguían caminos tradicionales. Descubrí que la verdadera educación no está en un título, sino en la aplicación práctica del conocimiento.',
      icon: <Sparkles size={24} />,
      easterEgg: 'El conocimiento sin aplicación es como tener un Ferrari sin gasolina. ¡Ponlo en práctica!'
    },
    {
      year: '2022',
      title: 'Empezando a ganar dinero con varios proyectos como freelancer',
      description: 'Transformé mis habilidades en ingresos. Como freelancer, descubrí que podía vivir de lo que amaba hacer. Cada proyecto era una oportunidad para crecer y demostrar que no necesitas un camino tradicional para tener éxito. La libertad de crear mi propio destino no tenía precio.',
      icon: <Briefcase size={24} />,
      easterEgg: 'Tu primera venta es la más difícil. Después de eso, solo necesitas seguir mejorando y entregando valor.'
    },
    {
      year: '2024',
      title: 'Creando y escalando mis empresas',
      description: 'De freelancer a empresario. Fundé mis propias comunidades y empresas, aplicando todo lo aprendido en el camino. La automatización y la inteligencia artificial se convirtieron en mis aliados para escalar sin límites. Lo que comenzó como supervivencia se transformó en un imperio en crecimiento.',
      icon: <Target size={24} />,
      easterEgg: 'Escalar no significa solo crecer, sino crear sistemas que funcionen sin ti. La verdadera libertad está en los sistemas.'
    },
    {
      year: '2025',
      title: 'Mostrando a los demás cómo hacerlo',
      description: 'Ahora mi misión es clara: abrir puertas para quienes, como yo, no tienen oportunidades tradicionales. Creé comunidades donde jóvenes pueden aprender, trabajar y crecer. Porque sé que hay miles como yo, con potencial infinito, esperando solo una oportunidad para brillar.',
      icon: <Zap size={24} />,
      easterEgg: 'El verdadero éxito no está en lo que logras, sino en cuántas personas puedes ayudar a lograrlo también.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setAnimateItems(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll('.timeline-item').forEach((item) => {
      observer.observe(item);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  const showEasterEgg = (index: number) => {
    setEasterEggVisible(index);
    setTimeout(() => setEasterEggVisible(null), 3000);
  };

  return (
    <section id="about" className="py-20 bg-[#1a1a28]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block">
            Mi Historia
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#3c9dff] to-[#a667ff]"></span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-6">
            Toda buena historia tiene su comienzo, tuve que aprender de todo para buscar mis oportunidades: Diseñador gráfico, locutor, editor de videos, empleado de aeropuerto, programador, desarrollador full stack, Dios, que no he hecho...
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {timelineItems.map((item, index) => (
            <div 
              key={index}
              data-index={index}
              className={`relative mb-12 pl-8 border-l-2 timeline-item ${
                expandedItem === index ? 'border-[#3c9dff]' : 'border-gray-700'
              } transition-all duration-500 ${
                animateItems[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div 
                className={`absolute left-[-13px] top-0 w-6 h-6 rounded-full flex items-center justify-center ${
                  expandedItem === index ? 'bg-[#3c9dff]' : 'bg-gray-700'
                } transition-colors duration-300 cursor-pointer transform hover:scale-110`}
                onClick={() => toggleItem(index)}
              >
                <div className="text-white">
                  {item.icon}
                </div>
              </div>

              <div 
                className={`absolute left-[-50px] top-0 text-sm font-bold ${
                  expandedItem === index ? 'text-[#3c9dff]' : 'text-gray-500'
                } transition-colors duration-300`}
              >
                {item.year}
              </div>

              <div 
                className={`p-5 rounded-lg ${
                  expandedItem === index ? 'bg-[#2a2a3d]' : 'bg-transparent'
                } transition-all duration-300 cursor-pointer transform hover:translate-x-1`}
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  {item.title}
                  <span 
                    className="ml-2 text-[#32ff7e] cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
                    onMouseEnter={() => showEasterEgg(index)}
                    title="Descubre un secreto"
                  >
                    ✨
                  </span>
                </h3>
                
                {expandedItem === index && (
                  <p className="text-gray-400 mt-2 transition-all duration-300 animate-fade-in">
                    {item.description}
                  </p>
                )}
                
                {easterEggVisible === index && item.easterEgg && (
                  <div className="mt-3 p-3 bg-[#3c9dff]/10 border border-[#3c9dff]/30 rounded text-[#3c9dff] text-sm animate-fade-in">
                    {item.easterEgg}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl text-[#32ff7e] font-semibold mb-4 animate-pulse-slow">
            "El fracaso no es una opción."
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Mi historia no es especial porque yo sea especial. Es especial porque demuestra que cualquiera, incluso tú, puede crear su propio camino cuando las puertas tradicionales están cerradas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;