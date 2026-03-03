
import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const breedData = {
  'Siamese': [
    { name: 'Will', age: 2, gender: 'Male', contact: '9876543210' },
    { name: 'Luna', age: 1, gender: 'Female', contact: '8765432109' },
  ],
  'Persian': [
    { name: 'Tom', age: 3, gender: 'Male', contact: '9988776655' },
  ],
  'Maine Coon': [
    { name: 'Tina', age: 4, gender: 'Female', contact: '8877665544' },
  ],
  'Ragdoll': [
    { name: 'Bob', age: 2, gender: 'Male', contact: '7788996655' },
  ],
};

const CatBreedPage = () => {
  const { breedName } = useParams();
  const decodedBreed = decodeURIComponent(breedName); // ✅ decode spaces
  const cats = breedData[decodedBreed] || [];

  const handleApply = (catName) => {
    alert(`🎉 Successfully applied to adopt ${catName}! 🐾`);
  };

  
  const navigate = useNavigate();


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
    <div
      className="container"
      style={{
        maxWidth: '1000vh',
        margin: '0 auto',
        padding: '30px',
        backgroundColor: '#f9f9f9',
        borderRadius: '15px',
        boxShadow: '0px 4px 15px rgba(0,0,0,0.1)',
      }}
    >
      <h2 className="text-center mb-5" style={{ color: '#333', marginLeft:'55vh' }}>
        {decodedBreed} Cats Available for Adoption
      </h2>

      <div className="row justify-content-center"style={{marginLeft:'55vh'}}>
        {cats.map((cat, index) => (
          <div className="col-md-6 mb-4" key={index}>
            <div
              className="card h-100 shadow text-center"
              style={{
                borderRadius: '12px',
                padding: '20px',
                backgroundColor: '#fff',
              }}
            >
              <div className="card-body">
                <h5 className="card-title mb-3">{cat.name}</h5>
                <p className="mb-1">🐱 Age: {cat.age} years</p>
                <p className="mb-1">🚻 Gender: {cat.gender}</p>
                <p className="mb-3">📞 Contact: {cat.contact}</p>
                <button
                  className="btn btn-success"
                  onClick={() => handleApply(cat.name)}
                >
                  Apply for Adoption
                </button>
              </div>
            </div>
          </div>
        ))}

        {cats.length === 0 && (
          <p className="text-center">No cats available for this breed right now.</p>
        )}
      </div>
    </div>
    </>
  );
};

export default CatBreedPage;
