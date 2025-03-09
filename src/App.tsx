import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Shield, Youtube, Mail, Instagram, Menu, X } from 'lucide-react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#1e1e2f] text-white">
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e2f]/80 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
              <div className="text-[#3c9dff] mr-2">
                <Shield size={24} />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-[#3c9dff] to-[#a667ff] text-transparent bg-clip-text">
                Néstor Alarcón
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-[#3c9dff] transition-colors">Inicio</Link>
              <Link to="/blog" className="hover:text-[#3c9dff] transition-colors">Blog</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-white p-2 hover:text-[#3c9dff] transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden fixed inset-x-0 bg-[#1a1a28] transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'top-[60px] opacity-100' : '-top-full opacity-0'
            }`}
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-lg hover:text-[#3c9dff] transition-colors"
                onClick={closeMobileMenu}
              >
                Inicio
              </Link>
              <Link 
                to="/blog" 
                className="text-lg hover:text-[#3c9dff] transition-colors"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
            </nav>
          </div>
        </header>

        <main className={isMobileMenuOpen ? 'pt-[120px]' : ''}>
          <Routes>
            <Route path="/" element={
              <>
                <HeroSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
              </>
            } />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>

        <footer className="bg-[#1a1a28] py-8">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">© {new Date().getFullYear()} - Néstor Alarcón | Mi propósito en esta vida antes de irme, es ayudar.</p>
            <div className="flex justify-center mt-4 space-x-4">
              <a href="https://www.youtube.com/@nestoralarcon.oficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#3c9dff]">
                <Youtube size={20} />
              </a>
              <a href="mailto:info.nestoralarcon@gmail.com" className="text-gray-400 hover:text-[#3c9dff]">
                <Mail size={20} />
              </a>
              <a href="https://www.instagram.com/nestoralarcon.ed" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#3c9dff]">
                <Instagram size={20} />
              </a>
              <a href="https://tiktok.com/@nestoralarcon.oficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#3c9dff]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="lucide lucide-tiktok">
                  <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 015.4 5.82C4.1 4.5 2.6 3.6 1 3.6v5.4a9.18 9.18 0 008.2 0v7.2a6.38 6.38 0 01-6.8-6.8C2.4 7.2 3.8 4.8 6.2 3.6a6.45 6.45 0 018.4 0v2.22z"/>
                  <path d="M23 8.2v4.62a9.18 9.18 0 01-8.2 0v-7.2a6.38 6.38 0 006.8 6.8c1.8 0 3.2-1.4 4.4-2.8"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
