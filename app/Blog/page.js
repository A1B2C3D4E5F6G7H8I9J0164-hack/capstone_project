'use client'
import { useState, useEffect } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Art of Indian Spices",
    author: "Chef Arjun Patel",
    image: "/image1.jpg",
    excerpt: "Indian cuisine is a symphony of spices, each telling a story of tradition...",
    content: "Longer blog post content goes here...",
  },
  {
    id: 2,
    title: "The Secret Behind Italian Pasta",
    author: "Chef Maria Romano",
    image: "/image7.jpg",
    excerpt: "From hand-rolled dough to perfect sauces, the magic behind Italian pasta...",
    content: "Longer blog post content goes here...",
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white px-6">
      <h1 className="text-4xl font-bold text-center py-6">Cultural Blog & Food Stories</h1>

      {!selectedPost ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="cursor-pointer bg-black p-4 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-gray-900"
            >
              <img src={post.image} alt={post.title} className="rounded-lg w-full h-48 object-cover" />
              <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-400">{post.author}</p>
              <p className="text-gray-300 mt-2">{post.excerpt}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-gray-900 p-6 rounded-lg shadow-lg">
          <img src={selectedPost.image} alt={selectedPost.title} className="rounded-lg w-full h-64 object-cover" />
          <h2 className="text-3xl font-bold mt-4">{selectedPost.title}</h2>
          <p className="text-gray-400">{selectedPost.author}</p>
          <p className="text-gray-300 mt-4">{selectedPost.content}</p>
          <button onClick={() => setSelectedPost(null)} className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg">
            Back to Blog
          </button>
        </div>
      )}
    </div>
  );
}
