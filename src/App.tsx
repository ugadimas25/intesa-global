import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  try {
    return (
      <div className="App">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    );
  } catch (error) {
    console.error('App Error:', error);
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Intesa Global</h1>
        <p>Loading... If you see this, please refresh the page.</p>
        <p>Error: {error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>
    );
  }
}

export default App;
