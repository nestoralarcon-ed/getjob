import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/posts';

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Post no encontrado</h2>
        <Link to="/" className="text-[#3c9dff] hover:underline">Volver al blog</Link>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto">
      <Link 
        to="/" 
        className="inline-flex items-center text-[#3c9dff] mb-8 hover:underline group"
      >
        <ArrowLeft size={20} className="mr-2 transform group-hover:-translate-x-2 transition-transform" />
        Volver al blog
      </Link>

      <div className="aspect-video rounded-lg overflow-hidden mb-8">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="prose prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-400 mb-8">
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} min de lectura</span>
        </div>

        <div className="space-y-6 text-gray-300" dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    </article>
  );
};

export default BlogPost;