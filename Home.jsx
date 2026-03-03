import React,{useRef}from 'react'
import {Link, useNavigate} from 'react-router-dom'
import landingImg from '../assets/pets.png'
import Footer from '../components/Footer';

const Home= ()=> {
  const navigate=useNavigate();
  const footerRef=useRef(null);

const scrollToFooter=()=>{
  footerRef.current?.scrollIntoView({behavior:'smooth'});
};
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-dark bg-primary w-100" style={{ width: '100%',marginRight:'40px'}}>
 <div className="w-100 px-4 d-flex justify-content-between align-items-center">
    <span className="navbar-brand fw-bold">
    PetMatch 
    <i class="fa-solid fa-cat" style={{color:'white', height:'5px',padding:'5px'}}></i>
    </span>
  
    <div className="d-flex gap-4">
      <button className='nav-link btn btn-link text-white' style={{textDecoration:'none'}}>Home</button>
      <button className='nav-link btn btn-link text-white'onClick={scrollToFooter} style={{textDecoration:'none'}}>About</button>
        <button className='nav-link btn btn-link text-white'onClick={scrollToFooter} style={{textDecoration:'none'}}>Contact
          </button>
    </div>
  </div>
</nav>

<div style={{width:'75vw', height:'100vh',marginLeft:'50px'}} className="w=100 d-flex justify-content-center align-items-center">
      <div className='container'>
     <div className="row align-items-center" style={{height:'100%'}}>
     <div className="col-lg-6">
       <h1 style={{fontSize:'70px',height:'100px'}} className='fw-bolder text-light'>
        <i style={{height:'80px'}}></i>
        <span style={{color:'black', fontSize:'30px',fontFamily:'initial'}}>
          <i class="fa-solid fa-paw" style={{padding:'10px'}}></i>
          Pet Adoption Platform</span>
        </h1>  
       <p>Find Your Purr-fect Match,
Welcome to PetMatch — where we believe every pet deserves a home and every person deserves a companion that truly fits their lifestyle. Take a quick personality quiz, explore pets that match you,
 and start your journey toward unconditional love. 🐶🐱<br></br><br></br>

<i><b>It’s not just adoption — it’s a connection for life. 💞</b></i>
      </p>
       <button className='btn btn-primary' onClick={()=>navigate('/register')}>
        Start to Explore →
      </button>
     </div>
     <div className="col-lg-2"/>
     <div className="col-lg-4">
      <img src={landingImg} alt="No image" style={{height:'300px'}} />
     </div>
     </div>
     </div>
    </div>
    <div ref={footerRef}>
    <Footer/>
    </div>
 </>

)
}
export default Home