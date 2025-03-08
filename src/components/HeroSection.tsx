import React, { useEffect, useRef, useState } from 'react';
import { Youtube, ArrowRight, Star, Award, Sparkles, Rocket } from 'lucide-react';

const HeroSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = Math.min(window.innerHeight, 800);

    const particles: { x: number; y: number; size: number; speedX: number; speedY: number; color: string }[] = [];
    
    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: `rgba(${Math.floor(Math.random() * 100 + 50)}, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 155 + 100)}, ${Math.random() * 0.5 + 0.1})`
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, 'rgba(30, 30, 47, 0.1)');
      gradient.addColorStop(1, 'rgba(60, 157, 255, 0.05)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > height) particle.speedY *= -1;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
      
      // Draw connections between nearby particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(60, 157, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
      
      // Add floating elements for more disruptive animations
      for (let i = 0; i < 5; i++) {
        const size = Math.random() * 20 + 5;
        const x = Math.random() * width;
        const y = Math.random() * height;
        
        ctx.beginPath();
        if (Math.random() > 0.5) {
          // Draw squares
          ctx.rect(x, y, size, size);
        } else {
          // Draw triangles
          ctx.moveTo(x, y);
          ctx.lineTo(x + size, y + size);
          ctx.lineTo(x - size, y + size);
          ctx.closePath();
        }
        
        ctx.strokeStyle = `rgba(${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 100 + 150)}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.2 + 0.1})`;
        ctx.lineWidth = Math.random() * 2 + 0.5;
        ctx.stroke();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = Math.min(window.innerHeight, 800);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Main hero content - full width */}
        <div className="text-center mb-16">
          <div className={`transition-all duration-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#2a2a3d] mb-6">
              <Award size={16} className="text-[#32ff7e] mr-2" />
              <span className="text-sm font-medium">Autodidacta desde el Año 2020</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Ser autodidacta y emprender</span>
              <span className="bg-gradient-to-r from-[#3c9dff] to-[#a667ff] text-transparent bg-clip-text">
                Cambió Mi Vida
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Tenemos que forjar nuestras propias oportunidades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('about')}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-[#3c9dff] to-[#a667ff] rounded-full text-white font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 hover:shadow-glow"
              >
                Descubre mi historia
                <ArrowRight size={18} className="ml-2" />
              </button>
              
              <button 
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center px-8 py-3 bg-[#2a2a3d] border border-[#3c9dff]/30 rounded-full text-white font-medium hover:bg-[#3c9dff]/10 transition-all duration-300"
              >
                Quiero una oportunidad
              </button>
            </div>
            
            <div className="mt-12">
              <div className="text-sm text-gray-400 text-center">
                <span className="text-white font-bold">No es fácil, pero tampoco imposible</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Video section - below the hero content */}
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-300 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Video destacado */}
            <div className="mt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Youtube className="text-red-500 mr-2" size={20} />
                  <h3 className="text-lg font-semibold">Video Destacado</h3>
                </div>
                <a 
                  href="https://www.youtube.com/@nestoralarcon.oficial" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-[#3c9dff] hover:underline flex items-center"
                >
                  Ver canal
                  <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
              
              <div className="aspect-video bg-gray-800 relative rounded-lg overflow-hidden w-full">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/C__2BQrBeiw"
                  title="Video destacado de Néstor Alarcón" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Elementos decorativos animados */}
      <div className="absolute top-1/4 left-10 w-12 h-12 rounded-full bg-gradient-to-r from-[#3c9dff]/20 to-[#a667ff]/20 animate-float-slow"></div>
      <div className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full bg-gradient-to-r from-[#32ff7e]/20 to-[#3c9dff]/20 animate-float-delay"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 rounded-full bg-gradient-to-r from-[#a667ff]/20 to-[#32ff7e]/20 animate-pulse-slow"></div>
    </section>
  );
};

export default HeroSection;
