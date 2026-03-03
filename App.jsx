import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import PetListPage from './pages/PetListPage';
import DogListPage from './pages/DogListPage';
import CatListPage from './pages/CatListPage';
import CatQuizPage from './pages/CatQuizPage';
import DogBreedPage from './pages/DogBreedPage';
import CatBreedPage from './pages/CatBreedPage';

import QuizPage from './pages/QuizPage';

function App() {
  return (
  
      <>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/pets" element={<PetListPage/>}/>
          <Route path="/dogs" element={<DogListPage />} />
          <Route path="/cats" element={<CatListPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/catquiz" element={<CatQuizPage />} />
          <Route path="/breed/:breedName" element={<DogBreedPage />} />
          <Route path="/catbreed/:breedName" element={<CatBreedPage />} />

          <Route path="/footer" element={<Footer/>}/>
        </Routes>
      </>
  );
}

export default App;
