import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';

function App() {
  return (
    <>
    <Navbar title="Text-Editor" about="About"/>
    <div className="container">
      <TextForm head="Enter your text below to parse it."/>
    </div>
    </>
  );
}

export default App;
