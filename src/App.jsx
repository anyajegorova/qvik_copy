import { useRef } from 'react'

import './App.css'
import Header from './Components/Header'
import LandingPage from './Components/LandingPage';
import JobDescription from './Components/JobDescription';
import ContactForm from './Components/ContactForm';
import Career from './Components/Career';
import Footer from './Components/Footer'

function App() {

  const myRef = useRef(null);
  const scroll = () => myRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <Header />
      <LandingPage scroll={scroll} />
      <JobDescription myRef={myRef} />
      <ContactForm />
      <Career />
      <Footer />
    </>
  )
}

export default App
