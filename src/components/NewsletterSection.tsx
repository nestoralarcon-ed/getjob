import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-20 bg-[#1e1e2f]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#2a2a3d] to-[#3c9dff]/10 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#3c9dff]/20 flex items-center justify-center mb-6">
              <Mail size={24} className="text-[#3c9dff]" />
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Suscríbete a mi newsletter</h2>
            
            <p className="text-gray-300 mb-8 max-w-lg">
              Recibe consejos, recursos y oportunidades directamente en tu bandeja de entrada. Sin spam, solo contenido valioso para ayudarte a crecer.
            </p>
            
            {isSubmitted ? (
              <div className="w-full max-w-md bg-[#32ff7e]/10 border border-[#32ff7e]/30 rounded-lg p-4 flex items-center animate-fade-in">
                <CheckCircle size={20} className="text-[#32ff7e] mr-3 flex-shrink-0" />
                <p className="text-[#32ff7e]">¡Gracias por suscribirte! Pronto recibirás tu primer email.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full max-w-md">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-grow relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Tu correo electrónico"
                      className="w-full px-4 py-3 rounded-lg bg-[#1e1e2f] border border-gray-700 text-white focus:outline-none focus:border-[#3c9dff] pr-10"
                      required
                    />
                    <Mail size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center ${
                      isLoading 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-[#3c9dff] to-[#a667ff] hover:opacity-90'
                    }`}
                  >
                    {isLoading ? (
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <>
                        <span>Suscribirme</span>
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </button>
                </div>
                
                <p className="text-xs text-gray-400 mt-3">
                  Al suscribirte, aceptas recibir emails con contenido educativo y promocional. Puedes darte de baja en cualquier momento.
                </p>
              </form>
            )}
            
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="flex items-center bg-[#2a2a3d] px-4 py-2 rounded-full">
                <span className="text-sm text-gray-300">Consejos prácticos</span>
              </div>
              <div className="flex items-center bg-[#2a2a3d] px-4 py-2 rounded-full">
                <span className="text-sm text-gray-300">Recursos gratuitos</span>
              </div>
              <div className="flex items-center bg-[#2a2a3d] px-4 py-2 rounded-full">
                <span className="text-sm text-gray-300">Oportunidades exclusivas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;