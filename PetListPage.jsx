import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DogImage from '../assets/pup.png';
import CatImage from '../assets/cat1.png';

const PetListPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark " style={{width:'100vw',marginTop:'0px'}}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="/">PetMatch🐾</Link>
          <div className="ms-auto">
            <Link className="nav-link text-white d-inline mx-2" to="/">Home</Link>
            <Link className="nav-link text-white d-inline mx-2" to="/dogs">Dogs</Link>
            <Link className="nav-link text-white d-inline mx-2" to="/cats">Cats</Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Choose Your Companion</h2>
        <div className="row justify-content-center">
          {/* Dog Card */}
          <div className="col-md-4 d-flex justify-content-center mb-4">
            <div className="card shadow text-center" style={{ width: '18rem', cursor: 'pointer' }} onClick={() => navigate('/dogs')}>
              <img src={DogImage} className="card-img-top" alt="Dog" style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Dog</h5>
                <p className="card-text">Click to see available dogs!</p>
                <button className="btn btn-outline-primary">Explore Dogs</button>
              </div>
            </div>
          </div>

          {/* Cat Card */}
          <div className="col-md-4 d-flex justify-content-center mb-4">
            <div className="card shadow text-center" style={{ width: '18rem', cursor: 'pointer' }} onClick={() => navigate('/cats')}>
              <img src={CatImage} className="card-img-top" alt="Cat" style={{ height: '250px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">Cat</h5>
                <p className="card-text">Click to see available cats!</p>
                <button className="btn btn-outline-primary">Explore Cats</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetListPage;
