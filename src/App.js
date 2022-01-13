import rocket from './rocket.png';
import star from './star.png';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className='header_text'>
          <h1>Hello and Welcome!</h1>
          <p>
            This is the <span className='underline'>start</span> of your new
            journey
          </p>
          <button>Get Started</button>
        </div>
        <div className='header_images'>
          <img id='star1' src={star} className='image' alt='star' />
          <img src={rocket} className='rocket' alt='rocket' />
          <img id='star2' src={star} className='image' alt='star' />
          <img id='star3' src={star} className='image' alt='star' />
        </div>
      </header>
    </div>
  );
}

export default App;
