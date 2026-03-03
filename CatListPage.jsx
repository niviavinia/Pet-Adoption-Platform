

import React from 'react';
import { useNavigate } from 'react-router-dom';
import siameseImg from '../assets/siamese.png';
import persianImg from '../assets/persian.png';
import maineCoonImg from '../assets/mainecoon.png';
import ragdollImg from '../assets/ragdoll.png';

const catBreeds = [
  { name: 'Siamese', description: 'Vocal and affectionate.', image: siameseImg },
  { name: 'Persian', description: 'Calm and elegant.', image: persianImg },
  { name: 'Maine Coon', description: 'Large and friendly.', image: maineCoonImg },
  { name: 'Ragdoll', description: 'Laid-back and loving.', image: ragdollImg }
];

const CatListPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        onClick={() => navigate('/pets')}
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

      <div className="container mt-4">
        <h2 className="text-center mb-4">Available Cat Breeds</h2>

        <div className="text-center mb-4">
          <button className="btn btn-warning" onClick={() => navigate('/catquiz')}>
            Find Your Match 🧠🐱
          </button>
        </div>

        <div className="row justify-content-center">
          {catBreeds.map((breed, index) => (
            <div
              key={index}
              className="col-12 col-md-6 mb-4 d-flex align-items-stretch justify-content-center"
              onClick={() => navigate(`/catbreed/${encodeURIComponent(breed.name)}`)} // ✅ fixed navigation
              style={{ cursor: 'pointer' }}
            >
              <div className="card shadow w-100" style={{ maxWidth: '400px' }}>
                <img
                  src={breed.image}
                  alt={breed.name}
                  className="card-img-top"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column text-center">
                  <h5 className="card-title">{breed.name}</h5>
                  <p className="card-text flex-grow-1">{breed.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CatListPage;

