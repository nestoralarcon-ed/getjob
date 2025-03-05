import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/posts';

const BlogList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">
          <span className="bg-gradient-to-r from-[#3c9dff] to-[#a667ff] text-transparent bg-clip-text">
            Mi Blog
          </span>
        </h1>
        
        <p className="text-xl text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Te comparto mis conocimientos para que generes tus oportunidades.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article 
              key={post.slug}
              className="bg-[#2a2a3d] rounded-lg overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
            >
              <Link to={`/blog/${post.slug}`} className="block h-full">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <span className="text-sm text-[#3c9dff] mb-2 block">{post.date}</span>
                  <h2 className="text-xl font-bold mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center text-[#3c9dff] group mt-auto">
                    <span className="mr-2">Leer más</span>
                    <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogList;