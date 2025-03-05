import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/posts';

const BlogList: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">
        <span className="bg-gradient-to-r from-[#3c9dff] to-[#a667ff] text-transparent bg-clip-text">
          Blog de Néstor Alarcón
        </span>
      </h1>
      
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article 
            key={post.slug}
            className="bg-[#2a2a3d] rounded-lg p-6 hover:transform hover:scale-[1.02] transition-all duration-300"
          >
            <Link to={`/post/${post.slug}`}>
              <div className="aspect-video rounded-lg overflow-hidden mb-4">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="mb-4">
                <span className="text-sm text-[#3c9dff]">{post.date}</span>
                <h2 className="text-2xl font-bold mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-400">{post.excerpt}</p>
              </div>
              
              <div className="flex items-center text-[#3c9dff] group">
                <span className="mr-2">Leer más</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogList;