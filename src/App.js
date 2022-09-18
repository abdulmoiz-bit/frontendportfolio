import './App.css';
//import './animation.css';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Footer from './Footer';
import Home from './Home';
import Skills from './Skills';
import { useEffect } from 'react';
//import { Route, Routes } from "react-router-dom";


function App() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  var mybutton = document.getElementById("arrow");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


  return (
    <>
      {/* 👇️ scroll to top on button click */}
      <div
        className='scrolltopbtn'
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }}
      >
        <span id='arrow'>
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" className="bi bi-arrow-up" fill='rgba(242, 192, 105, 0.8)' viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
          </svg>
        </span>
      </div>

      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />

    </>
  );
}

export default App;
