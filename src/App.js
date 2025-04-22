import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-primary min-h-screen">
      <nav className="fixed w-full z-20 top-0 bg-primary/90 backdrop-blur-sm">
        <Navbar />
      </nav>
      
      <main>
        <section id="home" className="min-h-screen flex items-center justify-center">
          {/* Hero section will go here */}
        </section>
        
        <section id="about" className="min-h-screen">
          {/* About section will go here */}
        </section>
        
        <section id="projects" className="min-h-screen">
          {/* Projects section will go here */}
        </section>
        
        <section id="contact" className="min-h-screen">
          {/* Contact section will go here */}
        </section>
      </main>
    </div>
  );
}

export default App;
