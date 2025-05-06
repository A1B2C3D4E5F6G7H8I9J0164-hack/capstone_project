export default function SocialFeed() {
    return (
      <section className="py-16 bg-black text-white text-center">
        <h2 className="text-5xl font-bold mb-8">Join Our Food Community 🍽️</h2>
        <p className="text-lg mb-6 text-gray-300">Share your favorite dish using <span className="text-yellow-400 font-bold">#CookCulture</span> on Instagram!</p>
        
        <div className="flex flex-wrap justify-center gap-6">
          <iframe 
            src="https://www.instagram.com/p/XXXXX/embed"
            className="w-[400px] h-[450px] rounded-lg shadow-lg border-4 border-yellow-400"
          ></iframe>
          <iframe 
            src="https://www.instagram.com/p/YYYY/embed"
            className="w-[400px] h-[450px] rounded-lg shadow-lg border-4 border-red-400"
          ></iframe>
        </div>
  
        <button className="mt-6 px-6 py-3 bg-green-500 rounded-lg text-xl hover:bg-green-700 transition">
          Explore More on Instagram
        </button>
      </section>
    );
  }
  