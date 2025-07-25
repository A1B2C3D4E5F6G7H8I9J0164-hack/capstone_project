'use client';
import { useState } from 'react';

export default function Blog() {
  
    const [blogPosts, setBlogPosts] = useState([
      {
        id: 1,
        title: "The Art of Indian Spices",
        author: "Chef Arjun Patel",
        image: "/image1.jpg",
        excerpt: "Indian cuisine is a symphony of spices, each telling a story of tradition...",
        content: "Indian spices are more than just ingredients; they’re storytellers of history, culture, and healing. From turmeric to cumin, every spice has a role to play in both flavor and wellness. It's an art passed down for generations.",
      },
      {
        id: 2,
        title: "The Secret Behind Italian Pasta",
        author: "Chef Maria Romano",
        image: "/image7.jpg",
        excerpt: "From hand-rolled dough to perfect sauces, the magic behind Italian pasta...",
        content: "Pasta is more than just food in Italy—it’s an art form. Each region has its own shapes and sauces, deeply rooted in local tradition and ingredients. True pasta making requires patience, skill, and passion.",
      },
      {
        id: 3,
        title: "Japanese Bento: A Packed Tradition",
        author: "Chef Sora Tanaka",
        image: "/image3.jpg",
        excerpt: "Bento boxes are a blend of nutrition, beauty, and culture...",
        content: "A Japanese bento is not just lunch; it’s an expression of care and artistry. Each box is carefully balanced with protein, rice, vegetables, and color to nourish both the body and soul.",
      },
      {
        id: 4,
        title: "The Soul of Moroccan Tagine",
        author: "Chef Amal Benyamina",
        image: "/image4.jpg",
        excerpt: "Slow-cooked, spiced, and full of soul — tagine is more than a dish...",
        content: "A Moroccan tagine is a culinary treasure cooked in a conical clay pot. The slow simmer of spices, meats, and vegetables makes this dish a hearty, fragrant masterpiece enjoyed in communal gatherings.",
      },
      {
        id: 5,
        title: "Korean Kimchi: Fermented Flavor",
        author: "Chef Jisoo Park",
        image: "/image5.jpg",
        excerpt: "Kimchi is Korea’s national pride — spicy, sour, and full of culture...",
        content: "Made from fermented cabbage and radish, kimchi is deeply ingrained in Korean heritage. Its flavors evolve over time, and it's served with almost every meal, embodying bold taste and health benefits.",
      },
      {
        id: 6,
        title: "French Pastries: Elegance in Every Bite",
        author: "Chef Lucien Morel",
        image: "/image6.jpg",
        excerpt: "Delicate, rich, and flaky — pastries from France are timeless icons...",
        content: "From croissants to macarons, French pastries reflect centuries of refinement. Every layer of dough and swirl of cream is the result of precision and love for culinary beauty.",
      },
    ]);
    

  const [selectedPost, setSelectedPost] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    author: '',
    image: '',
    excerpt: '',
    content: '',
  });

  const handleAddPost = () => {
    const postToAdd = {
      ...newPost,
      id: Date.now(),
    };
    setBlogPosts([postToAdd, ...blogPosts]);
    setNewPost({ title: '', author: '', image: '', excerpt: '', content: '' });
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-10 font-sans relative">
      <h1 className="text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
        Cultural Blog & Food Stories
      </h1>

      {!selectedPost ? (
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="cursor-pointer bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-xl hover:shadow-2xl transition transform hover:scale-105 duration-300"
            >
              <img
                src={post.image}
                alt={post.title}
                className="rounded-xl w-full h-52 object-cover"
              />
              <div className="mt-4">
                <h2 className="text-2xl font-bold">{post.title}</h2>
                <p className="text-sm text-gray-400 mt-1">by {post.author}</p>
                <p className="text-gray-300 mt-2 text-sm">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
          <img
            src={selectedPost.image}
            alt={selectedPost.title}
            className="rounded-xl w-full h-64 object-cover"
          />
          <h2 className="text-4xl font-bold mt-6">{selectedPost.title}</h2>
          <p className="text-gray-400 mt-1 text-lg">By {selectedPost.author}</p>
          <p className="text-gray-200 mt-4 text-lg whitespace-pre-line leading-relaxed">
            {selectedPost.content}
          </p>
          <button
            onClick={() => setSelectedPost(null)}
            className="mt-6 px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded-full text-white font-medium"
          >
            ← Back to Blog
          </button>
        </div>
      )}


      <button
        onClick={() => setShowForm(true)}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg text-2xl z-50"
        title="Add Your Story"
      >
        ＋
      </button>


      {showForm && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 px-4">
          <div className="bg-white text-black p-6 rounded-xl max-w-md w-full space-y-4">
            <h2 className="text-2xl font-bold text-center">Add Your Story</h2>

            <input
              type="text"
              placeholder="Title"
              className="w-full p-2 border rounded"
              value={newPost.title}
              onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Author"
              className="w-full p-2 border rounded"
              value={newPost.author}
              onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              className="w-full p-2 border rounded"
              value={newPost.image}
              onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
            />
            <input
              type="text"
              placeholder="Short Excerpt"
              className="w-full p-2 border rounded"
              value={newPost.excerpt}
              onChange={(e) => setNewPost({ ...newPost, excerpt: e.target.value })}
            />
            <textarea
              placeholder="Full Content"
              rows="4"
              className="w-full p-2 border rounded"
              value={newPost.content}
              onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            ></textarea>

            <div className="flex justify-between">
              <button
                onClick={() => setShowForm(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddPost}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
