import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const questions = [
  {
    question: "What's your home environment like?",
    options: [
      { text: "Quiet and calm", breed: 'Persian' },
      { text: "Busy and full of people", breed: 'Siamese' },
      { text: "Spacious with room to explore", breed: 'Maine Coon' },
      { text: "Relaxed and cozy", breed: 'Ragdoll' }
    ]
  },
  {
    question: "How much grooming are you okay with?",
    options: [
      { text: "A lot, I enjoy grooming", breed: 'Persian' },
      { text: "Minimal grooming please", breed: 'Siamese' },
      { text: "Moderate grooming is fine", breed: 'Maine Coon' },
      { text: "Some grooming, but not too much", breed: 'Ragdoll' }
    ]
  },
  {
    question: "What kind of cat personality do you prefer?",
    options: [
      { text: "Laid-back and affectionate", breed: 'Persian' },
      { text: "Vocal and interactive", breed: 'Siamese' },
      { text: "Gentle giant type", breed: 'Maine Coon' },
      { text: "Calm and loving lap cat", breed: 'Ragdoll' }
    ]
  },
  
  {
    question: "Do you want a cat that's more active during the day or relaxed?",
    options: [
      { text: "Relaxed and naps a lot", breed: 'Ragdoll' },
      { text: "Active and playful", breed: 'Siamese' }
    ]
  },
  {
    question: "Would you prefer a very talkative cat or a quieter one?",
    options: [
      { text: "Talkative and expressive", breed: 'Siamese' },
      { text: "Quiet and peaceful", breed: 'Persian' }
    ]
  },
  {
    question: "Do you like larger cats or smaller ones?",
    options: [
      { text: "Large and majestic", breed: 'Maine Coon' },
      { text: "Smaller and elegant", breed: 'Siamese' }
    ]
  },
  {
    question: "Are you looking for a cat that enjoys cuddles?",
    options: [
      { text: "Yes, very cuddly", breed: 'Ragdoll' },
      { text: "Sometimes, but not always", breed: 'Maine Coon' }
    ]
  },
  {
    question: "Do you want a cat that's highly playful or more gentle?",
    options: [
      { text: "Highly playful", breed: 'Siamese' },
      { text: "Gentle and calm", breed: 'Ragdoll' }
    ]
  },
  {
    question: "How well should your cat get along with children and families?",
    options: [
      { text: "Must be family-friendly", breed: 'Maine Coon' },
      { text: "Better with adults", breed: 'Persian' }
    ]
  }
];

const CatQuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [topBreed, setTopBreed] = useState('');
  const navigate=useNavigate();

  const handleOptionClick = (breed) => {
    setScores(prev => ({ ...prev, [breed]: (prev[breed] || 0) + 1 }));

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const breedWithMaxScore = Object.entries({
        ...scores,
        [breed]: (scores[breed] || 0) + 1
      }).reduce((max, curr) => curr[1] > max[1] ? curr : max)[0];

      setTopBreed(breedWithMaxScore);
      setShowResult(true);
    }
  };

  return (
<>
<button
        onClick={() => navigate('/cats')}
        style={{
          position: 'absolute',
          top: '20px',
          left: '20px',
          backgroundColor: 'transparent',
          border: '2px solid white',
          color: 'black',
          borderRadius: '80px',
          padding: '6px 12px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          zIndex: 1000,
        }}
      >
        <i className="fa-solid fa-arrow-left"></i> Back
      </button>

    <div className="container my-5" style={{marginLeft:'22vw'}}>
      {!showResult ? (
        <>
          <h3 className="text-center mb-4">Cat Personality Match Quiz 🐱</h3>
          <div className="card shadow p-4">
            <h5>{questions[currentQuestion].question}</h5>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="btn btn-outline-primary d-block w-100 text-start my-2"
                onClick={() => handleOptionClick(option.breed)}
              >
                {option.text}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h3>🎉 Your Ideal Cat Breed is:</h3>
          <h2 className="my-3">{topBreed}</h2>
          <p>Thanks for taking the quiz! Check out more about {topBreed}s in the Cats page.</p>
          <button className="btn btn-secondary mt-3" onClick={() => window.location.href ='/cats'}>
            Explore Cats
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default CatQuizPage;
