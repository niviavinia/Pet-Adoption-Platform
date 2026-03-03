import React from 'react';
import { useNavigate } from 'react-router-dom';
import labroderImg from '../assets/lab.png';
import germanImg from '../assets/german.png';
import beagleImg from '../assets/beagle.png';
import goldieImg from '../assets/goldie.png';

const dogBreeds = [
  { name: 'Labrador Retriever', description: 'Friendly and outgoing.', image: labroderImg },
  { name: 'German Shepherd', description: 'Intelligent and protective.', image: germanImg },
  { name: 'Beagle', description: 'Cheerful and curious.', image: beagleImg },
  { name: 'Golden Retriever', description: 'Loyal and kind-hearted.', image: goldieImg }
];

const DogListPage = () => {
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
    
    <div className="container mt-4 " style={{marginRight:'150vw',marginLeft:'0vw'}}>
  <h2 className="text-center mb-4 ">Available Dog Breeds</h2><br></br>

  <div className="text-center mb-4">
    <button className="btn btn-warning" onClick={() => navigate('/quiz')}>Find Your Match 🧠🐾</button>
  </div><br></br><br></br>

  <div className="row justify-content-center">
  {dogBreeds.map((breed, index) => (
    <div
      key={index}
      className="col-12 col-md-6 mb-4 d-flex align-items-stretch justify-content-center"
      onClick={() => navigate(`/breed/${breed.name}`)}
      style={{ cursor: 'pointer' }}
    >
      <div className="card shadow w-100" style={{ maxWidth: '400px' }}>
        <img
          src={breed.image}
          alt={breed.name}
          className="card-img-top"
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
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

export default DogListPage;
