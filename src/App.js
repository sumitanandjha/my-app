import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
   <>
<Navbar title="Rectifier" AboutUs="About"/>
<div className="container">
<Textform heading="textbox"/>
</div>

</>

  );
}

export default App;
