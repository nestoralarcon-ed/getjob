import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Shield, Youtube, Mail, Instagram } from 'lucide-react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#1e1e2f] text-white">
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#1e1e2f]/80 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <div className="text-[#3c9dff] mr-2">
                <Shield size={24} />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-[#3c9dff] to-[#a667ff] text-transparent bg-clip-text">
                Néstor Alarcón
              </span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-[#3c9dff] transition-colors">Inicio</Link>
              <Link to="/blog" className="hover:text-[#3c9dff] transition-colors">Blog</Link>
            </nav>
          </div>
        </header>

        <main>
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
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
