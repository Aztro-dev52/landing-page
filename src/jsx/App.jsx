import '../css/App.css';
import Card from './card';

function App() {
  return (
    <div className="landing">
      <section className="hero">
        <h1>Sites que vendem em 7 dias</h1>
        <Card />
      </section>
      <footer>®2026 - Aztro-dev52 | Feito em React</footer>
    </div>
  )
}

export default App;