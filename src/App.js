import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Keyscards from './components/Keyscards';
import Hero from './components/Hero';
import Stats from './components/Stats';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <Keyscards />
        <Stats />

        <section className="reviews">
          <h2>What Our Users Say</h2>
          <p>Showcase some user reviews here for credibility.</p>
        </section>

        <section className="problem-target">
          <h2>Our Features</h2>
          <p>Explain the various features of your product.</p>
        </section>

        <section className="cta">
          <h2>Get Started Today!</h2>
          <button>Sign Up Now</button>
        </section>

        <footer className="footer">
          <p>Footer details and links go here.</p>
        </footer>
      </div>
    </>
  );
}

export default App;

