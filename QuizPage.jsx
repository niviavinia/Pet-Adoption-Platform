import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const questions = [
  {
    question: "What's your lifestyle?",
    options: [
      { text: "Very active, love the outdoors", breed: 'Labrador Retriever' },
      { text: "Homebody, prefer chilling", breed: 'Beagle' },
      { text: "I like structure and routines", breed: 'German Shepherd' },
      { text: "I enjoy socializing and family time", breed: 'Golden Retriever' }
    ]
  },
  {
    question: "How much time can you spend daily with a pet?",
    options: [
      { text: "Several hours daily", breed: 'Golden Retriever' },
      { text: "Moderate amount of time", breed: 'Labrador Retriever' },
      { text: "Short periods", breed: 'Beagle' },
      { text: "Time with purpose (like training)", breed: 'German Shepherd' }
    ]
  },
  {
    question: "What kind of bond do you want with your dog?",
    options: [
      { text: "A loyal protector", breed: 'German Shepherd' },
      { text: "A playful companion", breed: 'Beagle' },
      { text: "A loving best friend", breed: 'Golden Retriever' },
      { text: "A smart & sporty buddy", breed: 'Labrador Retriever' }
    ]
  },
  {
    question: "Do you enjoy outdoor adventures like hiking and running?",
    options: [
      { text: "Yes, love outdoor adventures!", breed: 'Labrador Retriever' },
      { text: "Prefer short walks and relaxing", breed: 'Beagle' }
    ]
  },
  {
    question: "Would you prefer a dog that's easy to train or a little independent?",
    options: [
      { text: "Easy to train", breed: 'German Shepherd' },
      { text: "A little independent", breed: 'Beagle' }
    ]
  },
  {
    question: "Are you looking for a dog that loves cuddling or one that enjoys activity more?",
    options: [
      { text: "Loves cuddling", breed: 'Golden Retriever' },
      { text: "Enjoys activity", breed: 'Labrador Retriever' }
    ]
  },
  {
    question: "Do you want a dog that's good with kids?",
    options: [
      { text: "Yes, very important", breed: 'Golden Retriever' },
      { text: "Not the top priority", breed: 'German Shepherd' }
    ]
  },
  {
    question: "How important is low maintenance grooming for you?",
    options: [
      { text: "Very important", breed: 'Beagle' },
      { text: "I don’t mind regular grooming", breed: 'Golden Retriever' }
    ]
  },
  {
    question: "Would you prefer a calm dog or a highly energetic one?",
    options: [
      { text: "Calm and relaxed", breed: 'Beagle' },
      { text: "Energetic and playful", breed: 'Labrador Retriever' }
    ]
  }
];

const QuizPage = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [topBreed, setTopBreed] = useState('');

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
        onClick={() => navigate('/dogs')}
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

      <div className="container my-5" style={{ marginLeft: '20vw' }}>
        {!showResult ? (
          <>
            <h3 className="text-center mb-4">Personality Match Quiz 🐾</h3>
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
            <h3>🎉 Your Ideal Match is:</h3>
            <h2 className="my-3">{topBreed}</h2>
            <p>Thanks for taking the quiz! Check out more about {topBreed}s in the Dogs page.</p>
            <button
              className="btn btn-secondary mt-3"
              onClick={() => window.location.href = '/dogs'}
            >
              Explore Dogs
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default QuizPage;
