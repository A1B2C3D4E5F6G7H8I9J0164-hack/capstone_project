'use client'
import { useState } from 'react';

const questions = [
  { 
    question: 'How spicy do you like your food?', 
    options: ['Mild', 'Medium', 'Fiery Hot'] 
  },
  { 
    question: 'What texture do you prefer?', 
    options: ['Creamy & Smooth', 'Crunchy & Crispy', 'Hearty & Thick'] 
  },
  { 
    question: 'What’s your go-to comfort food?', 
    options: ['Rice-based dishes', 'Flatbreads', 'Fried snacks'] 
  },
];

const dishes = {
  'MildCreamyRice-based': { name: 'Butter Chicken 🍗', img: '/image1.jpg', description: 'Rich, creamy, and full of flavor!' },
  'Fiery HotCrunchyFlatbreads': { name: 'Pani Puri 🌶️', img: '/image2.jpg', description: 'Spicy, crispy, and bursting with taste!' },
  'MediumHeartyRice-based': { name: 'Biryani 🍛', img: '/image3.jpg', description: 'Bold spices & aromatic rice—a classic favorite!' },
};

export default function Quiz() {
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (questionIndex, option) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = option;
    setAnswers(newAnswers);
  };

  const calculateResult = () => {
    const key = answers.join('');
    setResult(dishes[key] || { name: 'Dosa 🍽️', img: '/image6.jpg', description: 'Simple, crispy, and beloved by all!' });
  };

  return (
    <section className="py-16  text-white text-center">
      <h2 className="text-5xl font-extrabold mb-12 tracking-wide">Which Indian Dish Are You?</h2>
      <div className=" p-6 rounded-lg shadow-lg w-[450px] mx-auto">
        
        {questions.map((q, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-2xl font-semibold">{q.question}</h3>
            <div className="flex justify-center gap-4 mt-3">
              {q.options.map((option, i) => (
                <button 
                  key={i} 
                  onClick={() => handleAnswer(index, option)} 
                  className={`px-4 py-2 rounded-lg ${answers[index] === option ? 'bg-green-500' : 'bg-gray-600 hover:bg-gray-700'} transition`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

        <button onClick={calculateResult} className="mt-6 px-6 py-3 bg-blue-500 rounded-lg text-xl hover:bg-blue-700 transition">
          Get Your Dish!
        </button>

        {result && (
          <div className="mt-6 text-3xl font-bold flex flex-col items-center">
            <img src={result.img} alt={result.name} className="w-40 h-40 rounded-lg shadow-xl mt-4" />
            <p className="mt-4">{result.name}</p>
            <p className="mt-2 text-lg text-gray-300">{result.description}</p>
          </div>
        )}
      </div>
    </section>
  );
}
